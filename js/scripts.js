$(document).ready(function() {
    txtlang('fr');

    $('#myTimeline').verticalTimeline({
        startLeft: false,
        alternate: true,
        animate: "slide",
        arrows: true
    });
    var gallery = $('.gallery a').simpleLightbox();

    var lastId,
        topMenu = $("#mainNav"),
        topMenuHeight = topMenu.outerHeight() + 1,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    menuItems.click(function(e) {

        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top
        }, 750);

        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });


});

//language fonction
function txtlang(language) {

    if (language == 'fr') {
        $('#adress').html('Adresse : 9 rue de la Tortue, Belgique. <br>Contacte:  Gsm: +32470458819 <br>    Mail: <a href="mailto:olivier.deryck@std.heh.be">olivier.deryck@std.heh.be</a>');
        $('#prof_description').text('20 ans, étudiant en deuxième bachelier en Informatique & systèmes orientation réseaux & télécommunications avec option développement');
        $('#navAbout').text('A propos de moi');
        $('#navStudies').text('Parcours d\'études');
        $('#studiespath').text('Parcours d\'études');
        $('#navSkills').text('Compétences');
        $('#navInterests').text('Informations complémentaires');
        $('#navProjects').text('Projets réalisés');
        $('#projectsH').text('Projets réalisés');
        $('#std1').text('Etudes générales secondaires, option mathématiques et sciences à l\Athénée Royal Jules Bordet Soignies');
        $('#std2').text('Première année en bachelier en Sciences informatiques à l\'Umons');
        $('#std3').text('Bachelier en informatiques et systèmes, finalité réseaux et télécommunications');
        $('#intern').text('Stage d\'observation d\'une semaine dans le service informatique de l\'hopital de Soignies');
        $('#skillstitle').text('Compétences');
        $('#progtitle').text('Compétences en informatiques et languages de programmation');
        $('#progskills').html('<li>Connaissances en languages: python, C, C#, java</li><li>Gestion de bases de données</li><li>Développement web: html, CSS (+BootStrap), JavaScript (+Jquery), php</li> <li> Gestion de systèmes Linux</li> <li>Réseau</li>');
        $('#methodotitle').text('Méthodes de travail ');
        $('#methodo').html('<li>Utilisation de git</li><li>Gestion de projet à l\'aide de la méthode agile scrum</li>');
        $('#selfskilltitle').text('Compétences personnelles');
        $('#selfskill').html('<li>Capacité d\'adaptation</li> <li>Autonome</li> <li> Autodidacte</li> ');
        $('#more').html('<h2 class="subheading mb-3">Infos complémentaires</h2><ul><li>Né le 30 juillet 1998</li><li>Langue maternelle: français</li><li>Bonne connaissance de l\'anglais (B2)</li><li>Permis de conduire B</li> </ul>');
        $('#hobbies').html('<h2 class="subheading mb-3">Intérêts personnels</h2><p>La technologie de manière générale, les jeux vidéos, les voyages, le sport, les sciences, ...</p>');
        $('#morecontact').text('Plus de contact:');
        $('#hackaton').text('Librairie de films/séries (C#)');
        $('#otherprojects').text('Projets divers');
        $('#sokobanmain').attr('title', 'menu principal du sokoban');
        $('#sokobanplay').attr('title', 'Partie de sokoban');
        $('#sokobaneditor').attr('title', 'Editeur de niveau');
        $('#hackatonmenu').attr('title', 'Menu de la bibliothèque');
        $('#hackatonexemple').attr('title', 'Exemple bibliothèque de films et séries');
        $('#car').attr('title', 'Voiture qui fonctionne avec des capteurs, programmée sur un raspberry');
        $('#cabletester').attr('title', 'testeur de cable réalisé en cours');
		$('#clickinfo').text('cliquez sur les images pour zoomer');
	} else if (language == 'en') {
        $('#adress').html('Adress : 9 rue de la Tortue, Belgium. <br>Contact:  Mobile: +32470458819 <br>    Mail: <a href="mailto:olivier.deryck@std.heh.be">olivier.deryck@std.heh.be</a>');
        $('#prof_description').text('20 years old, second year information technology, network and telecommunication student');
        $('#navAbout').text('About me');
        $('#navStudies').text('Studies');
        $('#studiespath').text('Studies');
        $('#navSkills').text('Skills');
        $('#navInterests').text('Additional information');
        $('#navProjects').text('Projects made');
        $('#projectsH').text('Projects made');
        $('#std1').text('High school studies: mathematics and sciences at Athénée Royal Jules Bordet Soignies');
        $('#std2').text('First year of computer science degree at Umons');
        $('#std3').text('Bachelor\'s degree in information technology, network and telecommunication');
        $('#intern').text('Observation internship of a week in the IT department of the hospital of Soignies');
        $('#skillstitle').text('Skills');
        $('#progtitle').text('Technical skills and programming languages');
        $('#progskills').html('<li>Knowledge of: python, C, C#, java</li><li>Database management</li><li>Web development: html, CSS (+BootStrap), JavaScript (+Jquery), php</li> <li> Linux systems</li> <li>Network: configuration, routing,switching, ... </li>');
        $('#methodotitle').text('Tools and methodology');
        $('#methodo').html('<li>Git use</li><li>Scrum methodology</li>');
        $('#selfskilltitle').text('Personnal skills');
        $('#selfskill').html('<li>Adaptability</li> <li>Autonomous</li> <li> Autodidact</li> ');
        $('#more').html('<h2 class="subheading mb-3">Additional informations</h2><ul><li>Born on the 30 of july 1998</li><li>Native language: french</li><li>Good knowledge of english (B2)</li><li>Driver license</li> </ul>');
        $('#hobbies').html('<h2 class="subheading mb-3">Personal interests</h2><p>Technology, videogames, trips, sport, sciences, ...</p>');
        $('#morecontact').text('More contacts:');
        $('#hackaton').text('Movies and series library (C#)');
        $('#otherprojects').text('Other projects');
        $('#sokobanmain').attr('title', 'sokoban main menu');
        $('#sokobanplay').attr('title', 'sokoban gameplay');
        $('#sokobaneditor').attr('title', 'sokoban level editor');
        $('#hackatonmenu').attr('title', 'movies/series library main menu');
        $('#hackatonexemple').attr('title', 'library exemple');
        $('#car').attr('title', 'sensors and raspberry car');
        $('#cabletester').attr('title', 'cable tester');
		$('#clickinfo').text('click on the pics to zoom');

    }
}