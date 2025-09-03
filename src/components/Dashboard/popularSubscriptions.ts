import { ServiceOption } from "./ServiceComoBox";

export const POPULAR_SERVICES: ServiceOption[] = [
    // 🌍 Global Streaming / Entertainment
    { id: 'netflix', name: 'Netflix', category: 'Entertainment', logo: '/logos/netflix.jpg' },
    { id: 'prime-video', name: 'Prime Video', category: 'Entertainment', logo: '/logos/prime.png' },
    { id: 'disney-plus', name: 'Disney+', category: 'Entertainment', logo: '/logos/disney.png' },
    { id: 'hbo-max', name: 'HBO Max', category: 'Entertainment', logo: '/logos/hbo.png' },
    { id: 'hulu', name: 'Hulu', category: 'Entertainment', logo: '/logos/hulu.png' },
    { id: 'apple-tv', name: 'Apple TV+', category: 'Entertainment', logo: '/logos/appletv.png' },
    { id: 'paramount-plus', name: 'Paramount+', category: 'Entertainment', logo: '/logos/paramount.png' },
    { id: 'peacock', name: 'Peacock', category: 'Entertainment', logo: '/logos/peacock.png' },
    { id: 'crunchyroll', name: 'Crunchyroll', category: 'Entertainment', logo: '/logos/crunchyroll.png' },
    { id: 'funimation', name: 'Funimation', category: 'Entertainment', logo: '/logos/funimation.png' },
    { id: 'starz', name: 'Starz', category: 'Entertainment', logo: '/logos/starz.png' },
    { id: 'showtime', name: 'Showtime', category: 'Entertainment', logo: '/logos/showtime.png' },
    { id: 'curiositystream', name: 'CuriosityStream', category: 'Entertainment', logo: '/logos/curiositystream.png' },
    { id: 'mubi', name: 'Mubi', category: 'Entertainment', logo: '/logos/mubi.png' },
    { id: 'sling', name: 'Sling TV', category: 'Entertainment', logo: '/logos/sling.png' },
    { id: 'fubo', name: 'FuboTV', category: 'Entertainment', logo: '/logos/fubo.png' },
  
    // 🎬 MENA / Dubai Streaming
    { id: 'shahid', name: 'Shahid VIP', category: 'Entertainment', logo: '/logos/shahid.png' },
    { id: 'osn+', name: 'OSN+', category: 'Entertainment', logo: '/logos/osn.png' },
    { id: 'starzplay-arabia', name: 'StarzPlay Arabia', category: 'Entertainment', logo: '/logos/starzplay.png' },
    { id: 'anghami-plus', name: 'Anghami Plus', category: 'Music', logo: '/logos/anghami.png' },
    { id: 'etisalat-tv', name: 'Etisalat TV', category: 'Entertainment', logo: '/logos/etisalat.png' },
    { id: 'du-tv', name: 'du TV', category: 'Entertainment', logo: '/logos/du.png' },
    { id: 'tod', name: 'TOD', category: 'Entertainment', logo: '/logos/tod.png' }, // beIN streaming
    { id: 'jawwy-tv', name: 'Jawwy TV', category: 'Entertainment', logo: '/logos/jawwy.png' },
    { id: 'wavo', name: 'WAVO (OSN)', category: 'Entertainment', logo: '/logos/wavo.png' },
  
    // 🎵 Music (Global + MENA)
    { id: 'spotify', name: 'Spotify', category: 'Music', logo: '/logos/spotify.png' },
    { id: 'apple-music', name: 'Apple Music', category: 'Music', logo: '/logos/applemusic.png' },
    { id: 'tidal', name: 'Tidal', category: 'Music', logo: '/logos/tidal.png' },
    { id: 'deezer', name: 'Deezer', category: 'Music', logo: '/logos/deezer.png' },
    { id: 'soundcloud', name: 'SoundCloud Go', category: 'Music', logo: '/logos/soundcloud.png' },
    { id: 'anghami', name: 'Anghami', category: 'Music', logo: '/logos/anghami.png' },
  
    // 📱 Telecom / Mobile Plans (UAE)
    { id: 'etisalat', name: 'Etisalat Mobile Plans', category: 'Telecom', logo: '/logos/etisalat.png' },
    { id: 'du', name: 'du Mobile Plans', category: 'Telecom', logo: '/logos/du.png' },
    { id: 'virgin-mobile', name: 'Virgin Mobile UAE', category: 'Telecom', logo: '/logos/virgin.png' },
  
    // 🛒 Shopping / Loyalty
    { id: 'noon-vip', name: 'Noon VIP', category: 'Shopping', logo: '/logos/noon.png' },
    { id: 'amazon-prime-uae', name: 'Amazon Prime UAE', category: 'Shopping', logo: '/logos/prime.png' },
    { id: 'carrefour-myclub', name: 'Carrefour MyCLUB', category: 'Shopping', logo: '/logos/carrefour.png' },
    { id: 'talabat-pro', name: 'Talabat Pro', category: 'Food Delivery', logo: '/logos/talabat.png' },
    { id: 'zomato-pro', name: 'Zomato Pro', category: 'Food Delivery', logo: '/logos/zomato.png' },
    { id: 'deliveroo-plus', name: 'Deliveroo Plus', category: 'Food Delivery', logo: '/logos/deliveroo.png' },
    { id: 'careem-plus', name: 'Careem Plus', category: 'Transport & Delivery', logo: '/logos/careem.png' },
  
    // ☁️ Cloud & Productivity (Global + MENA users love these)
    { id: 'google-one', name: 'Google One', category: 'Cloud', logo: '/logos/googleone.png' },
    { id: 'icloud', name: 'iCloud', category: 'Cloud', logo: '/logos/icloud.png' },
    { id: 'onedrive', name: 'OneDrive', category: 'Cloud', logo: '/logos/onedrive.png' },
    { id: 'dropbox', name: 'Dropbox', category: 'Cloud', logo: '/logos/dropbox.png' },
    { id: 'microsoft-365', name: 'Microsoft 365', category: 'Productivity', logo: '/logos/office.png' },
    { id: 'google-workspace', name: 'Google Workspace', category: 'Productivity', logo: '/logos/googleworkspace.png' },
    { id: 'adobe', name: 'Adobe Creative Cloud', category: 'Productivity', logo: '/logos/adobe.png' },
    { id: 'canva', name: 'Canva Pro', category: 'Productivity', logo: '/logos/canva.png' },
    { id: 'figma', name: 'Figma', category: 'Productivity', logo: '/logos/figma.png' },
    { id: 'notion', name: 'Notion', category: 'Productivity', logo: '/logos/notion.png' },
    { id: 'slack', name: 'Slack', category: 'Productivity', logo: '/logos/slack.png' },
  
    // 🎮 Gaming (Global + MENA popular)
    { id: 'xbox', name: 'Xbox Game Pass', category: 'Gaming', logo: '/logos/xbox.png' },
    { id: 'playstation-plus', name: 'PlayStation Plus', category: 'Gaming', logo: '/logos/playstation.png' },
    { id: 'nintendo-online', name: 'Nintendo Switch Online', category: 'Gaming', logo: '/logos/nintendo.png' },
    { id: 'ea-play', name: 'EA Play', category: 'Gaming', logo: '/logos/ea.png' },
    { id: 'ubisoft-plus', name: 'Ubisoft+', category: 'Gaming', logo: '/logos/ubisoft.png' },
    { id: 'epic', name: 'Epic Games', category: 'Gaming', logo: '/logos/epic.png' },
    { id: 'steam', name: 'Steam', category: 'Gaming', logo: '/logos/steam.png' },
  
    // 🧘 Fitness / Health
    { id: 'calm', name: 'Calm', category: 'Health & Fitness', logo: '/logos/calm.png' },
    { id: 'headspace', name: 'Headspace', category: 'Health & Fitness', logo: '/logos/headspace.png' },
    { id: 'fitbit', name: 'Fitbit Premium', category: 'Health & Fitness', logo: '/logos/fitbit.png' },
    { id: 'peloton', name: 'Peloton', category: 'Health & Fitness', logo: '/logos/peloton.png' },
    { id: 'strava', name: 'Strava', category: 'Health & Fitness', logo: '/logos/strava.png' },
    { id: 'classpass', name: 'ClassPass UAE', category: 'Health & Fitness', logo: '/logos/classpass.png' },
  ];
  