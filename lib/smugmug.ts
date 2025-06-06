const API_KEY = 'CZfb6xtsvbWqrz7hLjS5TxmF2GxCHHMn';
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
  // Convert thumbnail URL to X5 size
  // Example: from ".../Th/image-Th.jpg" to ".../X5/image.jpg"
  return thumbnailUrl
    .replace('/Th/', '/X5/')  // Replace thumbnail path with X5
    .replace(/-Th\./, '.');  // Remove the -Th suffix
}

function getLargeUrl(thumbnailUrl: string): string {
  // Convert thumbnail URL to Large size
  // Example: from ".../Th/image-Th.jpg" to ".../L/image.jpg"
  return thumbnailUrl
    .replace('/Th/', '/L/')  // Replace thumbnail path with L
    .replace(/-Th\./, '.');  // Remove the -Th suffix
}

export async function getGalleryImages(): Promise<SmugMugImage[]> {
  try {
    // Get images directly from the album
    const imagesUrl = `https://api.smugmug.com/api/v2/album/${ALBUM_KEY}!images?APIKey=${API_KEY}`;
    console.log('Fetching images from URL:', imagesUrl.replace(API_KEY, '[API_KEY_REDACTED]'));
    
    const imagesResponse = await fetch(imagesUrl, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store', // Fetch fresh data
    });

    if (!imagesResponse.ok) {
      const errorText = await imagesResponse.text();
      console.error('SmugMug API Error:', imagesResponse.status, imagesResponse.statusText, errorText);
      throw new Error(`Images fetch failed: ${imagesResponse.status} ${imagesResponse.statusText}. Details: ${errorText}`);
    }

    const data: SmugMugResponse = await imagesResponse.json();
    // console.log('Images response code:', data.Code, 'message:', data.Message, 'Full data:', data);
    
    if (data.Code && data.Code !== 200) {
      console.error('SmugMug API returned an error code:', data.Code, data.Message, data);
      throw new Error(`SmugMug API Error: ${data.Message || 'Unknown error'} (Code: ${data.Code})`);
    }

    if (!data.Response?.AlbumImage) {
      console.error('No AlbumImage array in SmugMug response:', data);
      // Even if Response exists, AlbumImage might be missing or null
      // Consider if data.Response exists but data.Response.AlbumImage is null/undefined
      if (data.Response && !data.Response.AlbumImage) {
         throw new Error('AlbumImage array is missing in the SmugMug API response.');
      } else {
         throw new Error('Invalid response structure from SmugMug API.');
      }
    }
    
    if (data.Response.AlbumImage.length === 0) {
      console.log('No images found in the album (AlbumImage array is empty).');
      return []; // Return empty if no images, not an error
    }

    console.log(`Found ${data.Response.AlbumImage.length} images in the album (Total according to Pages: ${data.Response.Pages?.Total || 'N/A'}).`);
    
    return data.Response.AlbumImage.map(image => {
      // The X5Url and LargeUrl might not always be directly in the main image object.
      // The helper functions getX5Url/getLargeUrl assume they can be derived from ThumbnailUrl.
      // If SmugMug provides these directly in Uris.ImageSizes, that would be more robust.
      // For now, sticking to the provided helper functions logic.
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
    // Rethrow or return empty array based on desired error handling for the component
    // For now, returning empty array as per original example to prevent page crash
    return []; 
  }
} 