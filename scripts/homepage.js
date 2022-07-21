import { cardAboveFooter, footer } from "../components/combinedFooter.js";
import { navbar } from "../components/navbar.js";
document.querySelector("#footer").innerHTML = footer();
document.querySelector("#cardAboveFooter").innerHTML = cardAboveFooter();
document.querySelector("#navbar").innerHTML = navbar();
