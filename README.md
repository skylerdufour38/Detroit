# App Store

A GitHub Pages + GitHub Codespaces-ready web app for browsing an IPA archive and viewing app/package metadata.

## App Archive

| App Name | Bundle ID | Version | Platform | Minimum OS | IPA File | File Size | App Bundle Path | Archive Type |
|---|---|---:|---|---:|---|---:|---|---|
| Animal Sounds | `com.smartbabyapps.animalsounds` | 2.0 | iOS | 3.1 | `Animal Sounds 2.0.ipa` | 19.8 MB | `Payload/Animal Sounds.app` | App Store Package |
| SoundTouch | `com.yourcompany.SoundTouch` | 1.4 | iOS | 3.0 | `SoundTouch 1.4.ipa` | 155.5 MB | `Payload/SoundTouch.app` | App Store Package |
| Tozzle | `com.nodeflexion.Tozzle` | 3.7 | iOS | 3.1.3 | `Tozzle 3.7.ipa` | 112.6 MB | `Payload/Tozzle.app` | App Store Package |
| AutismXpress | `X7WS995LSR.com.StudioEmotion.AutismXpress` | 1.0 | iOS | 3.1.2 | `AutismXpress 1.0.ipa` | 7.4 MB | `Payload/AutismXpress.app` | App Store Package |
| Lunchbox | `com.thup.MonkeyPreschool` | 1.4 | iOS | 3.0 | `Lunchbox 1.4.ipa` | 13.7 MB | `Payload/Lunchbox.app` | App Store Package |
| Peek-a-Zoo | `com.duckduckmoosedesign.peekazoo` | 1.1.1 | iOS | 3.0 | `Peek-a-Zoo 1.1.1.ipa` | 19.1 MB | `Payload/Peek-a-Zoo.app` | App Store Package |
| Michigan Nature Sounds | `com.yourcompany.MichiganNatureSounds` | 1.0 | iOS | 3.0 | `Michigan Nature Sounds 1.0.ipa` | 24.6 MB | `Payload/Michigan Nature Sounds.app` | App Store Package |
| Peek-a-Zoo | `com.tbd.pazCLL` | 1.0 | iOS | 3.0 | `Peek-a-Zoo 1.0.ipa` | 24.6 MB | `Payload/Peek-a-Zoo.app` | App Store Package |
| Artsee | `com.britejar.artsee` | 1.1 | iOS | 2.2 | `Artsee 1.1.ipa` | 12.4 MB | `Payload/Artsee.app` | App Store Package |
| Angry Birds | `com.rovio.AngryBirdsHalloween` | 1.5.3 | iOS | 3.0 | `Angry Birds 1.5.3.ipa` | 16.8 MB | `Payload/Angry Birds.app` | App Store Package |
| Farm Flip Fun | `lv.yapp.farmflipfun` | 1.0 | iOS | 3.0 | `Farm Flip Fun 1.0.ipa` | 10.6 MB | `Payload/Farm Flip Fun.app` | App Store Package |
| Farm Story | `com.teamlava.farmstory` | 1.2 | iOS | 3.0 | `Farm Story 1.2.ipa` | 19.9 MB | `Payload/Farm Story.app` | App Store Package |
| Stickers | `com.nightanddaystudios.ericcarlestickers` | 1.0 | iOS | 5.0 | `Stickers 1.0.ipa` | 206.1 MB* | `Payload/Stickers.app` | App Store Package |
| Forest | `com.nightanddaystudios.peekabooforest` | 1.1.0 | iOS | 3.1.3 | `Forest 1.1.0.ipa` | 25.6 MB | `Payload/Forest.app` | App Store Package |
| Virtuoso | `com.peterb.virtuosopianofree` | 3.1.2 | iOS | 4.0 | `Virtuoso 3.1.2.ipa` | 19.9 MB | `Payload/Virtuoso.app` | App Store Package |
| ABC Tracer | `com.appzoo.ABCTracer` | 1.8 | iOS | 2.2.1 | `ABC Tracer 1.8.ipa` | 20.9 MB | `Payload/ABC Tracer.app` | App Store Package |
| Peek Wild | `com.nightanddaystudios.peekaboowild` | 2.0.1 | iOS | 3.1.3 | `Peek Wild 2.0.1.ipa` | 9.8 MB | `Payload/Peek Wild.app` | App Store Package |
| Peekaboo | `com.nightanddaystudios.peekaboobarn` | 2.0 | iOS | 2.2 | `Peekaboo 2.0.ipa` | 3.6 MB | `Payload/Peekaboo.app` | App Store Package |
| Finding Sight | `my.finding3` | 2.1 | iOS | 3.2 | `Finding Sight 2.1.ipa` | 34 MB | `Payload/Finding Sight.app` | App Store Package |
| ArtikPix | `com.rinnapps.artikpix.iap` | 1.2.4 | iOS | 3.1 | `ArtikPix 1.2.4.ipa` | 41.4 MB | `Payload/ArtikPix.app` | App Store Package |

\* The supplied Stickers entry was written as `206.1` without `MB`; this README interprets it as 206.1 MB.

## Download Package

**Package size:** 798.3 MB

Use the **Download ZIP** button on the GitHub Pages site to download the archive package.

> Note: The 798.3 MB package size is the value supplied for this example. The actual ZIP size will depend on the files committed to the repository.

## Suggested Repository Structure

```text
app-store/
âââ README.md
âââ index.html
âââ style.css
âââ script.js
âââ packages/
â   âââ App-Store-Archive.zip
âââ ipa/
    âââ Animal Sounds 2.0.ipa
    âââ SoundTouch 1.4.ipa
    âââ Tozzle 3.7.ipa
    âââ ...
```

## GitHub Pages

1. Create a GitHub repository.
2. Add `index.html`, `style.css`, and `script.js`.
3. Add the IPA archive files or a ZIP package as appropriate for your repository/storage limits.
4. In **Settings â Pages**, select the branch and `/ (root)` folder.
5. Open the published GitHub Pages URL.

## GitHub Codespaces

The project can be opened in GitHub Codespaces and previewed with a local web server. The site is intentionally built with standard HTML, CSS, and JavaScript so no framework or build step is required.

## Important

An `.ipa` is an iOS application package. The metadata above describes the archive entries supplied for this example; it does not by itself establish that the packages are currently installable on modern iOS or authorized for redistribution.
