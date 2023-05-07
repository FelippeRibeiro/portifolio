const header = document.querySelector("header");
window.addEventListener("scroll", () => {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#navbar-icon");
let navlist = document.querySelector(".navbar-header");

// menu.onclick =()=>{
//     menu.classList.toggle('bx-x');
//     navlist.classList.toggle("active");
// }

menu.addEventListener("click", () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("active");
});

const sr = ScrollReveal({
	distance: "50px",
	duration: 1500,
	reset: true,
});
sr.reveal("#home-text", { delay: 350, origin: "rigth" });

//Git repositories

const containerRepos = document.getElementById("repos");
async function getRepos(user) {
	const repos = await fetch(`https://api.github.com/users/${user}/repos`).then(
		async (res) => await res.json()
	);
	repos.forEach((element) => {
		createGitRepo(containerRepos, {
			titulo: element.name,
			url: element.svn_url,
			description: element.description,
		});
	});
}
getRepos("FelippeRibeiro");

function createGitRepo(container, { url, titulo, description, icon }) {
	const repositorio = createDiv("repositorio", containerRepos);
	const imgTag = document.createElement("img");

	const HyperLink = document.createElement("a");

	const TextDiv = document.createElement("div");
	TextDiv.id = "TextDiv";
	const title = document.createElement("p");
	const Divdescription = document.createElement("h6");
	HyperLink.href = url;
	HyperLink.target = "blank";
	HyperLink.id = "gitRepo";
	title.innerText = titulo;
	Divdescription.textContent = description;
	TextDiv.appendChild(title);
	TextDiv.appendChild(Divdescription);
	imgTag.src = "./images/github.webp";
	repositorio.appendChild(HyperLink);
	HyperLink.appendChild(imgTag);
	HyperLink.appendChild(TextDiv);
}

function createDiv(id, parent) {
	const element = document.createElement("div");
	element.id = id;
	parent.appendChild(element);
	return element;
}
