const apps = [
  {
    name: 'Animal Sounds',
    bundleId: 'com.smartbabyapps.animalsounds',
    version: '2.0',
    minOS: '3.1',
    ipaFile: 'Animal Sounds 2.0.ipa',
    size: '19.8 MB',
    bundlePath: 'Payload/Animal Sounds.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'SoundTouch',
    bundleId: 'com.yourcompany.SoundTouch',
    version: '1.4',
    minOS: '3.0',
    ipaFile: 'SoundTouch 1.4.ipa',
    size: '155.5 MB',
    bundlePath: 'Payload/SoundTouch.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Tozzle',
    bundleId: 'com.nodeflexion.Tozzle',
    version: '3.7',
    minOS: '3.1.3',
    ipaFile: 'Tozzle 3.7.ipa',
    size: '112.6 MB',
    bundlePath: 'Payload/Tozzle.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'AutismXpress',
    bundleId: 'X7WS995LSR.com.StudioEmotion.AutismXpress',
    version: '1.0',
    minOS: '3.1.2',
    ipaFile: 'AutismXpress 1.0.ipa',
    size: '7.4 MB',
    bundlePath: 'Payload/AutismXpress.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Lunchbox',
    bundleId: 'com.thup.MonkeyPreschool',
    version: '1.4',
    minOS: '3.0',
    ipaFile: 'Lunchbox 1.4.ipa',
    size: '13.7 MB',
    bundlePath: 'Payload/Lunchbox.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peek-a-Zoo',
    bundleId: 'com.duckduckmoosedesign.peekazoo',
    version: '1.1.1',
    minOS: '3.0',
    ipaFile: 'Peek-a-Zoo 1.1.1.ipa',
    size: '19.1 MB',
    bundlePath: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Michigan Nature Sounds',
    bundleId: 'com.yourcompany.MichiganNatureSounds',
    version: '1.0',
    minOS: '3.0',
    ipaFile: 'Michigan Nature Sounds 1.0.ipa',
    size: '24.6 MB',
    bundlePath: 'Payload/Michigan Nature Sounds.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peek-a-Zoo',
    bundleId: 'com.tbd.pazCLL',
    version: '1.0',
    minOS: '3.0',
    ipaFile: 'Peek-a-Zoo 1.0.ipa',
    size: '24.6 MB',
    bundlePath: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Artsee',
    bundleId: 'com.britejar.artsee',
    version: '1.1',
    minOS: '2.2',
    ipaFile: 'Artsee 1.1.ipa',
    size: '12.4 MB',
    bundlePath: 'Payload/Artsee.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Angry Birds',
    bundleId: 'com.rovio.AngryBirdsHalloween',
    version: '1.5.3',
    minOS: '3.0',
    ipaFile: 'Angry Birds 1.5.3.ipa',
    size: '16.8 MB',
    bundlePath: 'Payload/Angry Birds.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Farm Flip Fun',
    bundleId: 'lv.yapp.farmflipfun',
    version: '1.0',
    minOS: '3.0',
    ipaFile: 'Farm Flip Fun 1.0.ipa',
    size: '10.6 MB',
    bundlePath: 'Payload/Farm Flip Fun.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Farm Story',
    bundleId: 'com.teamlava.farmstory',
    version: '1.2',
    minOS: '3.0',
    ipaFile: 'Farm Story 1.2.ipa',
    size: '19.9 MB',
    bundlePath: 'Payload/Farm Story.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Stickers',
    bundleId: 'com.nightanddaystudios.ericcarlestickers',
    version: '1.0',
    minOS: '5.0',
    ipaFile: 'Stickers 1.0.ipa',
    size: '206.1 MB',
    bundlePath: 'Payload/Stickers.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Forest',
    bundleId: 'com.nightanddaystudios.peekabooforest',
    version: '1.1.0',
    minOS: '3.1.3',
    ipaFile: 'Forest 1.1.0.ipa',
    size: '25.6 MB',
    bundlePath: 'Payload/Forest.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Virtuoso',
    bundleId: 'com.peterb.virtuosopianofree',
    version: '3.1.2',
    minOS: '4.0',
    ipaFile: 'Virtuoso 3.1.2.ipa',
    size: '19.9 MB',
    bundlePath: 'Payload/Virtuoso.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'ABC Tracer',
    bundleId: 'com.appzoo.ABCTracer',
    version: '1.8',
    minOS: '2.2.1',
    ipaFile: 'ABC Tracer 1.8.ipa',
    size: '20.9 MB',
    bundlePath: 'Payload/ABC Tracer.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peek Wild',
    bundleId: 'com.nightanddaystudios.peekaboowild',
    version: '2.0.1',
    minOS: '3.1.3',
    ipaFile: 'Peek Wild 2.0.1.ipa',
    size: '9.8 MB',
    bundlePath: 'Payload/Peek Wild.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Peekaboo',
    bundleId: 'com.nightanddaystudios.peekaboobarn',
    version: '2.0',
    minOS: '2.2',
    ipaFile: 'Peekaboo 2.0.ipa',
    size: '3.6 MB',
    bundlePath: 'Payload/Peekaboo.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'Finding Sight',
    bundleId: 'my.finding3',
    version: '2.1',
    minOS: '3.2',
    ipaFile: 'Finding Sight 2.1.ipa',
    size: '34 MB',
    bundlePath: 'Payload/Finding Sight.app',
    archiveType: 'App Store Package'
  },
  {
    name: 'ArtikPix',
    bundleId: 'com.rinnapps.artikpix.iap',
    version: '1.2.4',
    minOS: '3.1',
    ipaFile: 'ArtikPix 1.2.4.ipa',
    size: '41.4 MB',
    bundlePath: 'Payload/ArtikPix.app',
    archiveType: 'App Store Package'
  }
];

const appGrid = document.getElementById('app-grid');
const searchInput = document.getElementById('search-input');
const totalApps = document.getElementById('total-apps');

totalApps.textContent = String(apps.length);

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join('')
    .slice(0, 2);
}

function renderApps(items) {
  appGrid.innerHTML = '';

  if (!items.length) {
    appGrid.innerHTML = '<div class="empty-state">No apps match your search.</div>';
    return;
  }

  appGrid.innerHTML = items
    .map((app) => `
      <article class="app-card">
        <div class="app-header">
          <div class="app-icon" aria-hidden="true">${getInitials(app.name)}</div>
          <span class="version-badge">v${app.version}</span>
        </div>

        <h3 class="app-name">${app.name}</h3>
        <div class="bundle-id">${app.bundleId}</div>

        <div class="meta-list">
          <div class="meta-line"><strong>Platform:</strong> ${app.platform || 'iOS'}</div>
          <div class="meta-line"><strong>Min OS:</strong> ${app.minOS}</div>
          <div class="file-line"><strong>Bundle:</strong> ${app.bundlePath}</div>
        </div>

        <div class="app-actions">
          <span class="app-size">${app.size}</span>
          <a class="download-button secondary" href="#" aria-label="Download ${app.ipaFile}">Download</a>
        </div>
      </article>
    `)
    .join('');
}

renderApps(apps);

searchInput.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();

  const filteredApps = apps.filter((app) => {
    const haystack = `${app.name} ${app.bundleId} ${app.ipaFile}`.toLowerCase();
    return haystack.includes(query);
  });

  renderApps(filteredApps);
});
