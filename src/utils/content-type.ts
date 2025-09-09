export enum ContentType {
    // Tipos mais comuns em APIs
    JSON = "application/json",
    XML = "application/xml",
    HTML = "text/html",
    PlainText = "text/plain",
    FormUrlEncoded = "application/x-www-form-urlencoded",
    FormData = "multipart/form-data",
  
    // Arquivos
    CSV = "text/csv",
    PDF = "application/pdf",
    ZIP = "application/zip",
    GZIP = "application/gzip",
  
    // Imagens
    JPEG = "image/jpeg",
    PNG = "image/png",
    GIF = "image/gif",
    SVG = "image/svg+xml",
    WEBP = "image/webp",
  
    // Áudio
    MP3 = "audio/mpeg",
    WAV = "audio/wav",
    OGG = "audio/ogg",
  
    // Vídeo
    MP4 = "video/mp4",
    WEBM = "video/webm",
    OGV = "video/ogg",
  
    // Outros
    OctetStream = "application/octet-stream", // binário genérico
    NDJSON = "application/x-ndjson", // JSON em streaming (newline-delimited)
  }
  