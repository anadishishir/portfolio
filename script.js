// Hero Section 

document.getElementById("hero-name").innerHTML = 
    `Hi, I'm <span>${portfolio.personal.name}</span>`; 

document.getElementById("hero-title").textContent = 
    portfolio.personal.title; 

document.getElementById("hero-description").textContent = 
    portfolio.personal.tagline; 

document.getElementById("resume-btn").href = 
    portfolio.personal.resume; 

document.getElementById("github-link").href = 
    portfolio.personal.github; 
    
document.getElementById("email-link").href = 
    `mailto:${portfolio.personal.email}`; 

document.getElementById("linkedin-link").href = 
    portfolio.personal.linkedin     
    
/* ==========================================================
   PROJECT SECTION
========================================================== */

    const projectsContainer = 
    document.getElementById("projects-container"); 

    portfolio.projects.forEach(project => { 

    const card = document.createElement("div"); 

    card.className = "project-card"; 

    card.innerHTML = ` 

    <img 
    src="${project.image}" 
    class="project-image" 
    alt="${project.title}"> 

    <div class="project-content"> 

    <span class="project-category"> 

    ${project.category} 

    </span> 

    <h3> 

    ${project.title} 

    </h3> 

    <p> 

    ${project.description} 

    </p> 

    <div class="feature-container"> 

    ${project.features.map(feature => 
    `<span class="feature-badge">${feature}</span>` 
    ).join("")} 

    </div> 

    <div class="tech-stack"> 

    ${project.technologies.map(tech => 
    `<span class="tech-badge">${tech}</span>` 
    ).join("")} 

    </div> 

    <div class="project-links"> 

    <a href="${project.github}" target="_blank"> 
        <i class="fa-brands fa-github"></i> GitHub 
    </a> 

    <a href="${project.demo}" target="_blank"> 
        <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
    </a> 
    </div> 

    </div> 

    `; 

    projectsContainer.appendChild(card); 

    });     

    /* ========================================================== 
   ABOUT SECTION 
========================================================== */ 

    document.getElementById("about-title").textContent = 
    portfolio.about.title; 

    document.getElementById("about-description").textContent = 
    portfolio.about.description; 

    document.getElementById("resume-btn").href = 
    portfolio.about.resume; 

    const highlights = 
    document.getElementById("about-highlights"); 

    portfolio.about.highlights.forEach(item=>{ 

    const div=document.createElement("div"); 

    div.className="highlight-item"; 

    div.innerHTML=` 
    <span>✔</span> 
    <p>${item}</p> 
    `; 

    highlights.appendChild(div); 

    }); 

    const skillsContainer = 
    document.getElementById("skills-container"); 

    portfolio.skills.forEach(skill=>{ 

    const card=document.createElement("div"); 

    card.className="skill-card"; 

    card.innerHTML=` 

    <h3>${skill.title}</h3> 

    <div class="skill-items"> 

    ${skill.items.map(item=> 

    `<span>${item}</span>` 

    ).join("")} 

    </div> 

    `; 

    skillsContainer.appendChild(card); 

    }); 

    /* ========================================================== 
   CONTACT 
========================================================== */ 

    document.getElementById("email").textContent = 
    portfolio.contact.email; 

    document.getElementById("github").href = 
    portfolio.contact.github; 

    document.getElementById("linkedin").href = 
    portfolio.contact.linkedin; 

    /*=============================================================
    FOOTER 
    ============================================================*/ 
    
    document.getElementById("footer-email").href = 
    `mailto:${portfolio.personal.email}`; 

    document.getElementById("footer-github").href = 
    portfolio.personal.github; 
 
    document.getElementById("footer-linkedin").href = 
    portfolio.personal.linkedin; 

    window.addEventListener("load",()=>{

setTimeout(()=>{ 

    const loader=document.getElementById("loader"); 

    loader.style.opacity="0"; 

    setTimeout(()=>{ 

    loader.style.display="none"; 

    },800); 

    },1000); 

    }) 