function showSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}

let german = true;

function changeLanguage() {

    const navLinks = document.getElementById("links");
    const navLinksTop = document.getElementById("links-t");
    const navLaw = document.getElementById("law");
    const navLawTop = document.getElementById("law-t");
    const langGer = document.getElementById("german");
    const langEng = document.getElementById("english");
    const descr = document.getElementById("description");
    const proHeading = document.getElementById("projects-heading");
    const langSelector = document.getElementById("selector");

    if(german){
        /*
        sprache ändern (englisch)
        */
        navLinks.innerHTML = "Links/Contact";
        navLinksTop.innerHTML = "Links/Contact";
        navLaw.innerHTML = "Legal";
        navLawTop.innerHTML = "Legal";
        langGer.innerHTML = "German";
        document.getElementById("language").style.width = "193px";
        langEng.innerHTML = "English";
        descr.innerHTML = "Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.";
        proHeading.innerHTML = "Projects";

        langSelector.style.marginLeft = "-80px"
        langSelector.innerHTML = "UUUUU";

        german = false;
    }else{
        /*
        sprache ändern (deutsch)
        */
        navLinks.innerHTML = "Links/Kontakt"
        navLinksTop.innerHTML ="Links/Kontakt"
        navLaw.innerHTML = "Rechtliches"
        navLawTop.innerHTML = "Rechtliches"
        langGer.innerHTML = "Deutsch"
        document.getElementById("language").style.width = "205px";
        langEng.innerHTML = "Englisch";
        descr.innerHTML = "Et enim, magna felis vestibulum, ornare massa elit, in nam dignissim nam morbi odio nullam. Rhoncus vitae ligula, mauris nascetur eleifend nonummy. Mauris mattis suscipit, fermentum sed proin vestibulum in diam interdum.";
        proHeading.innerHTML ="Projekte";

        langSelector.style.marginLeft = "-190px"
        langSelector.innerHTML = "UUUUUII";

        german = true;
    }
}