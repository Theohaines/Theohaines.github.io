//Written by Theo haines @ TheoHaines.xyz
//Sorry for bad code made in a day :)

//5S1vJejm1YukfhXa5PxPan -- Temp song ID
//https://open.spotify.com/track/5S1vJejm1YukfhXa5PxPan?si=1f867cbd17f54db4 EXAMPLE URL


let EmptySCRpt1 = 'https://open.spotify.com/embed/track/'
let EmptySCRpt2 = '?utm_source=generator'

let CreateSpotifeelDiv = document.getElementById("CreateSpotifeel")
let DisplaySpotifeelDiv = document.getElementById("DisplaySpotifeel")
let SpotifeelIframe = document.getElementById("SpotifeelIframe")

let SpotifeelCreateForm = document.getElementById("SpotifeelCreateForm")
let SpotiFeelLinkForm = document.getElementById("SpotifeelLinkForm")
let FriendlyNameInput = document.getElementById("FriendlyNameInput")
let SpotifySongURL = document.getElementById("SpotifySongURL")
let SpotifeelLink = document.getElementById("SpotifeelLink")
let CopyLinkButton

let FriendlyNameH1 = document.getElementById("FriendlyName")

let Header = document.getElementById("Header")

function OnPageLoad(){
    var CurrentURL = GetCurrentURL()
    ShowCreateForm()

    if(CurrentURL.toString() == "https://theohaines.xyz/Spotifeel/" || CurrentURL.toString() == "file:///D:/Backups&SafeKeeping/Websites/Current/SpotiFeel/index.html" || CurrentURL.toString() == "file:///D:/Github/Theohaines.github.io/SpotiFeel/index.html") //TODO: Make this hack better
    {
        ShowCreateMenu()
    }
    else
    {
        LoadURL()
        ShowSpotifeel()
    }
}

function GetCurrentURL(){
    return window.location.href
}

function CreateUniqueURL(){
    var UniqueURL = "https://theohaines.xyz/Spotifeel/"
    UniqueURL = UniqueURL + "#" + FriendlyNameInput.value + "~" + SplitSpotifyURL()
    UniqueURL = UniqueURL.replace(' ', '%20')
    SpotifeelLink.value = UniqueURL
}

function SplitSpotifyURL(){
    var SpotifyURL = SpotifySongURL.value

    SpotifyURL = SpotifyURL.replace('https://open.spotify.com/track/','');
    SpotifyURL = SpotifyURL.split('?')[0]
    return SpotifyURL
}

function LoadURL(){
    var NewURL = GetCurrentURL().toString()
    NewURL = NewURL.replace('https://theohaines.xyz/Spotifeel/', '');
    NewURL = NewURL.replace('file:///D:/Backups&SafeKeeping/Websites/Current/SpotiFeel/index.html', '');
    NewURL = NewURL.replace('%20', ' ')
    var FriendlyName = NewURL.split('~')[0]
    var FriendlyName = FriendlyName.split('#').pop();
    var SpotifySongID = NewURL.split('~').pop();

    LoadFriendlyName(FriendlyName)
    LoadCustomisation()
    LoadIframe(SpotifySongID)
}

function LoadFriendlyName(FriendlyName){
    FriendlyNameH1.innerText = FriendlyName
}

function LoadCustomisation(){
    //TODO: Maybe add functionality
}

function LoadIframe(SpotifySongID){
    var IframeSRC = EmptySCRpt1 + SpotifySongID  + EmptySCRpt2
    SpotifeelIframe.src = IframeSRC
}

function ShowSpotifeel(){
    LoadURL()
    CreateSpotifeelDiv.style.display = "none"
    DisplaySpotifeelDiv.style.display = "block"
    Header.style.display = "none"
}

function ShowCreateMenu(){
    CreateSpotifeelDiv.style.display = "block"
    DisplaySpotifeelDiv.style.display = "none"
    Header.style.display = "block"
}

function HideCreateForm(){
    SpotifeelCreateForm.style.display = "none"
    SpotiFeelLinkForm.style.display = "block"
}

function ShowCreateForm(){
    SpotifeelCreateForm.style.display = "block"
    SpotiFeelLinkForm.style.display = "none"
}

function CopyLink(Button){
    SpotifeelLink.select();
    SpotifeelLink.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(SpotifeelLink.value);

    Button.value = "Copied!"

    CopyLinkButton = Button
}

function ResetCopyButton(){
    CopyLinkButton.value = "Copy link"
}

function ChangeLinkToSpotifeel(){ //TODO: Make this sound less dodgy
    window.location.href = SpotifeelLink.value
    window.location.reload()
}