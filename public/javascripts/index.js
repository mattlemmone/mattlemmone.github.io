var b = "about, music, hire, help, github";

function eval_input(a) {
    a = a.trim();
    if ("" != a) {
        print_to_console(a, null, !0), a = a.toLowerCase();
        switch (a) {
            case "hi":
            case "hello":
                print_to_console("Hello! Welcome to my portfolio.");
                break;
            case "test":
                print_to_console("Don't worry, it works.");
                break;
            case "cool":
                print_to_console("Say, thanks.");
                break;
            case "abou":
            case "abotu":
                print_to_console('Let\'s assume you meant "about"...');
            case "about ":
            case "about":
                a = "I am a 22 year old student working towards a bachelor's degree in Computer Engineering with hands-on experience in developing and designing code to solve problems for fellow end-users, and to ultimately focus on the extraordinary integration of technology with the real world.\nI am passionate about the ideas of software engineering - understanding the intricacies behind both hardware and software, and applying innovative and critical thinking to ensure all operations are performed with great finesse, clarity, and success.\nCurrently engaged in the University of Florida's computer engineering curriculum involving programming concepts, applications of methodologies from Java, C, C++, data structuring, algorithm analyzation, computer architecture, as well as extensive lab work with all of the above.\nIndependently, I study Python, JavaScript, PHP, C#, as well as some of their respective web frameworks (Nodejs, Django, WordPress). I am also experienced with front-end developement via HTML and CSS.", parse_and_print(a, null, !0);
                break;
            case "musci":
            case "musi":
            case "musc":
                print_to_console('Let\'s assume you meant "music"...');
            case "music ":
            case "music":
                a = "Music became a part of my life when I picked up my first instrument, guitar, in 2002.\nSince then, I have learned how to adapt to playing other instruments such as: bass guitar, drums, bongos, piano, ukelele, etc.\nAside from being an excellent academic and hobby, music is crucial to my personality.\nIf you are in the South Florida area and want to set up a gig, contact me!\nIf you would instead just like to have a listen, check out my SoundCloud link.", parse_and_print(a, null, !0);
                break;
            case "hier":
            case "hir":
                print_to_console('Let\'s assume you meant "hire"...');
            case "hire ":
            case "hire":
                a = 'I freelance online on ' + str_to_anchor("upWork", "https://www.upwork.com/o/profiles/users/_~01c2b5c65e1e534f28/") + '. Need a program, script, or website? Contact me if you are interested in negotiating a job.', print_to_console(a);
                break;
            case "help ":
            case "help":
                a = "Welcome to my portfolio! This is an interactive JavaScript console that will help you learn more about me.\nTry typing in one of these words: " + b + ".\nToo much text? Type: 'clear'.", parse_and_print(a, null, !0);
                break;
            case "github":
                gitInfo();
                break;
            case "haha":
            case "ha":
            case "ha ha":
            case "lol":
                print_to_console("Please don't laugh. I'm a professional.");
                break;
            case "lmao":
            case "rofl":
                print_to_console("No, really. I'm a professional.");
                break;
            case "clear":
                $("#console-log").empty(), print_to_console("How's that? Don't forget: " + b, 100);
                break;
            default:
                print_to_console("I'm not sure what you mean..."), print_to_console(" Try one of these instead: " + b, 2e3)
        }
    }
}

function gitInfo() {
    $.getJSON('https://api.github.com/users/mattlemmone', function(data) {
        var numFollowers = data.followers,
            url = data.html_url,
            numRepos = data.public_repos,
            lastUpdate = data.updated_at,
            msg = 'I currently have ' + numRepos + ' repositories and ' + numFollowers + ' followers on ' + str_to_anchor("GitHub", url) + '.\nLast update: ' + lastUpdate + '.';
        print_to_console(msg);
    });
    $.getJSON('https://api.github.com/users/mattlemmone/repos', function(data) {
        for (repo in data) {
            var name = data[repo].name,
                url = data[repo].html_url,
                lastUpdate = data[repo].updated_at,
                desc = data[repo].description,
                name = str_to_anchor(name, url),
                str = name + ' - ' + desc + " Last update: " + lastUpdate;
            print_to_console(str);

        }
    });
}

function str_to_anchor(str, url) {
    return '<a href="' + url + '">' + str + '</a>';
}

function parse_and_print(a, b, c) {
    b || (b = ".");
    var d = a.split(b);
    c || (b = "");
    for (var e = 0; e < d.length; e++)
        d[e] && (e > 0 ? print_to_console(d[e] + b, 2e3) : print_to_console(d[e] + b))
}

function print_to_console(a, b, c) {
    b || (b = 800), c ? $("#console-log").append('<li class="user-text"> > ' + a + " </li>") : $("#console-log").delay(b).queue(function(b) {
        $(this).append('<li class="sys-text animated fadeInUp"> > ' + a + " </li>"), b()
    })
}

$(document).ready(function() {
    print_to_console("Please type a command. Try: " + b + ".", 100), $("#console-entry").focus(), $("#console-log-container").click(function() {
        $("#console-entry").focus()
    }), $("#console-entry").keydown(function(a) {
        13 == a.which && (eval_input($("#console-entry").val()), $("#console-entry").val(""))
    }), $("#mail").click(function() {
        window.location.href = "mailto:mattlemmone@gmail.com"
    }), $("#git").click(function() {
        window.location.href = "https://github.com/mattlemmone"
    }), $("#codepen").click(function() {
        window.location.href = "http://codepen.io/mattlemmone/"
    }), $("#soundcloud").click(function() {
        window.location.href = "https://soundcloud.com/mattlemmone"
    }), $("#linkedin").click(function() {
        window.location.href = "https://www.linkedin.com/pub/matthew-lemmone/5b/2b1/54"
    }), $("#mail").tooltip({
        title: "Email"
    }), $("#git").tooltip({
        title: "GitHub"
    }), $("#codepen").tooltip({
        title: "CodePen"
    }), $("#soundcloud").tooltip({
        title: "SoundCloud"
    }), $("#linkedin").tooltip({
        title: "LinkedIn"
    })
});
