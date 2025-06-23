// DEPRECATED: This client-side SmugMug API integration has been replaced with a server-side API route.
// The gallery now uses /api/gallery endpoint for better security and performance.
// This file is kept for reference but should not be used in new code.

const API_KEY = process.env.NEXT_PUBLIC_SMUGMUG_API_KEY;
const ALBUM_KEY = '464g5S'; // Using the original target album key

interface SmugMugImage {
  ImageKey: string;
  ThumbnailUrl: string;
  WebUri: string;
  Caption: string;
  Title: string;
  FileName: string;
  IsVideo: boolean;
  Format: string;
  X5Url?: string;
  LargeUrl?: string;
}

interface SmugMugResponse {
  Response: {
    AlbumImage: SmugMugImage[];
    Pages: {
      Total: number;
      Start: number;
      Count: number;
    };
  };
  Code: number;
  Message: string;
}

function getX5Url(thumbnailUrl: string): string {
  return thumbnailUrl
    .replace('/Th/', '/X5/')
    .replace(/-Th\./, '.');
}

function getLargeUrl(thumbnailUrl: string): string {
  return thumbnailUrl
    .replace('/Th/', '/L/')
    .replace(/-Th\./, '.');
}

export async function getGalleryImages(): Promise<SmugMugImage[]> {
  if (!API_KEY) {
    throw new Error('SmugMug API key is not configured. Please set NEXT_PUBLIC_SMUGMUG_API_KEY environment variable.');
  }

  try {
    const imagesUrl = `https://api.smugmug.com/api/v2/album/${ALBUM_KEY}!images?APIKey=${API_KEY}`;
    
    const imagesResponse = await fetch(imagesUrl, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!imagesResponse.ok) {
      const errorText = await imagesResponse.text();
      console.error('SmugMug API Error:', imagesResponse.status, imagesResponse.statusText, errorText);
      throw new Error(`Images fetch failed: ${imagesResponse.status} ${imagesResponse.statusText}. Details: ${errorText}`);
    }

    const data: SmugMugResponse = await imagesResponse.json();
    
    if (data.Code && data.Code !== 200) {
      console.error('SmugMug API returned an error code:', data.Code, data.Message, data);
      throw new Error(`SmugMug API Error: ${data.Message || 'Unknown error'} (Code: ${data.Code})`);
    }

    if (!data.Response?.AlbumImage) {
      throw new Error('Invalid response structure from SmugMug API.');
    }
    
    return data.Response.AlbumImage.map(image => {
      const mappedImage: SmugMugImage = {
        ...image,
        Caption: image.Caption || '',
        Title: image.Title || image.FileName || '',
        IsVideo: image.IsVideo || false,
        Format: image.Format || 'JPG',
      };
      if (!image.IsVideo) {
        mappedImage.X5Url = getX5Url(image.ThumbnailUrl);
        mappedImage.LargeUrl = getLargeUrl(image.ThumbnailUrl);
      }
      return mappedImage;
    });
  } catch (error) {
    console.error('Error in getGalleryImages:', error);
    throw error;
  }
} 