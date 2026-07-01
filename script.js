document.querySelectorAll('section').forEach(function(sec) {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  observer.observe(sec);
});

// ===============================
// Kali Terminal Animation
// ===============================

const terminalOutput = `Bihghefty@kali:~$ whoami

Henry Uwaezuoke

Bihghefty@kali:~$ role

Cybersecurity Analyst | Penetration Tester

Bihghefty@kali:~$ ls projects

✔ Wazuh SIEM Home Lab
✔ Active Directory Security Lab
✔ Phishing Simulation Lab
✔ Network Penetration Test
✔ DVWA Assessment
✔ Metasploitable2 Assessment

Bihghefty@kali:~$ cat books.txt

✔ Linux for Cybersecurity Beginners
✔ Network Scanning Guide for Beginners

Bihghefty@kali:~$ echo "Welcome"

Welcome to my cybersecurity portfolio.

Bihghefty@kali:~$ status

✔ Portfolio Loaded
✔ Security Labs Ready
✔ Amazon Books Available

Bihghefty@kali:~$ `;

const terminal = document.getElementById("terminal-text");

if(terminal){

let index = 0;

function typeTerminal(){

    if(index < terminalOutput.length){

        terminal.textContent += terminalOutput.charAt(index);

        index++;

        setTimeout(typeTerminal,20);

    }else{

        terminal.innerHTML += '<span class="cursor">█</span>';

    }

}

window.addEventListener("load",typeTerminal);

}
