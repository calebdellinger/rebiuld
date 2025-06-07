import { NextResponse } from 'next/server';

const API_KEY = process.env.SMUGMUG_API_KEY;
const ALBUM_KEY = '464g5S';

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
  };
}

function getX5Url(thumbnailUrl: string): string {
  return thumbnailUrl.replace('/Th/', '/X5/').replace(/-Th\\./, '.');
}

function getLargeUrl(thumbnailUrl: string): string {
  return thumbnailUrl.replace('/Th/', '/L/').replace(/-Th\\./, '.');
}

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: 'SmugMug API key is not configured.' }, { status: 500 });
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
      return NextResponse.json({ error: `Images fetch failed: ${imagesResponse.status} ${imagesResponse.statusText}. Details: ${errorText}` }, { status: 500 });
    }

    const data: SmugMugResponse = await imagesResponse.json();

    const processedImages = data.Response.AlbumImage.map(image => {
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

    return NextResponse.json(processedImages);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 