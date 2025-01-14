
$(document).ready(function(){

    function clearTabs(){
        const tabs = document.getElementsByClassName('nav-item');
        const pages = document.getElementsByClassName('content');

        for(var i=0;i<tabs.length;i++){
            tabs[i].classList.remove('active');
        }

        for(var i=0;i<pages.length;i++){
            pages[i].classList.remove('flexed-box-center');
        }
    }

    function switchPage(page){

        switch(page){
            case('about_tab'):
                document.getElementById('about').classList.add('flexed-box-center');
                document.getElementById('about').scrollTo(0, 0);
                break;
            case('skill_tab'):
                document.getElementById('skills').classList.add('flexed-box-center');
                break;
            case('projects_tab'):
                document.getElementById('projects').classList.add('flexed-box-center');
                break;
            default:
                console.log('page not found');
                break;
        }
    }

    $('.nav-item').click(function(){
        clearTabs();
        switchPage(this.id);
        document.getElementById('all_content').scrollTo({
            top: 0,
            bahavior: 'smooth'
        });
        this.classList.add('active');
    });

    // click the mobile menu
    $('.mobile-menu').click(function(){
        document.getElementById('mobile-menu').classList.add('show');
    });

    $('#exit-menu').click(function(){
        document.getElementById('mobile-menu').classList.remove('show');
    });

    $('.item-menu').click(function(){
        clearTabs();
        switchPage($(this).attr('value'));
        document.getElementById('all_content').scrollTo({
            top: 0,
            bahavior: 'smooth'
        });
        document.getElementById('mobile-menu').classList.remove('show');
        document.getElementById($(this).attr('value')).classList.add('active');
    });
});