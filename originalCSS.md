<!-- The styling of the original developer here for comparison -->
<!-- My notes end with initial "S" -->


* {
	box-sizing: border-box;
}
html { <!--Removed vendor prefixes throughout. Modern codebases don't need them -->
  font-size: -moz-calc(4px + 0.45vw);
  font-size: -webkit-calc(4px + 0.45vw);
	font-size: calc(4px + 0.45vw);
}
body {
	font-family: 'Montserrat', sans-serif;
	color: #000;
}
a {
	text-decoration: none;
	color: #000;
}
*:focus {
  outline: 0;
}
/* Primary Style 
--------------------------------*/ <!-- Section meanings made clearer S -->
.main {
	max-width: 110rem;
	margin: 0 auto;
	padding: 0 2rem;
}
header {
	line-height: 12rem;
	height: 12rem;
}
header h1 {
	font-size: 2.5rem;
	font-family: 'Oswald', sans-serif;
}
header ul::after {
	content: '';
	display: table;
	clear: both;
}
header li {
	float: left;
	width: 12.5%;
	text-align: center;
	text-transform: uppercase;
}
header li:nth-child(4) {
	width: 25%;
}
header li a {
	font-weight: 900;
	font-size: 1.2rem;
	letter-spacing: 2px;
}
.text {     <!-- Possibly leftover code. No text class in og markup. Removed. S -->
	font-size: 2rem;
	padding: 2rem 0;
	-moz-columns: 3;
	-webkit-columns: 3;
	columns: 3;
}
.text p {       <!-- Same -->
	margin-bottom: 2rem;
}                                      <!-- Design flip to mobile first S -->
@media screen and (max-width: 800px) { <!-- Changed to standard breakpoints S -->
	header ul li:not(:nth-child(4)) {   
		display: none;
	}
	header ul li:nth-child(4) {
		width: 100%;
	}
}
/* Slider Style
--------------------------------------*/
.cd-slider {
	position: relative;
	width: 100%;
	height: 50rem;
	overflow: hidden;
	margin-bottom: 8rem; 
} <!-- spacing properties now use em when possible S --> <!-- rem for fonts -->
.cd-slider li {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	visibility: hidden;
	transition: visibility 0s 1s;
  will-change: visibility;
}
.image {
	position: absolute;
	top: 0;
	left: 0;
	width: 70%;
	height: 100%;
	background-size: cover;
	background-position: 50% 50%;
	clip: rect(0, 80rem, 50rem, 80rem);
	transition: clip .5s cubic-bezier(0.99, 0.01, 0.45, 0.9) .5s;
  will-change: clip;
}
.content {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	padding: 2rem 0 0 2rem;
	font-size: 9rem;
	text-align: right;
}
.content h2 {
	text-overflow: ellipsis;
	overflow: hidden;
	transform: translateY(-30%);
	opacity: 0;
	transition: transform .5s, opacity .5s;
  will-change: transform, opacity;
}
.content a {
	display: inline-block;
	font-size: 2rem;
	text-transform: lowercase;
	padding: 1.5rem;
	opacity: 0;
	transform: translateY(-100%);
	transition: transform .5s .1s, opacity .5s .1s;
  will-change: transform, opacity;
}
/* Current Slide 
-------------------------------------*/
li.current {
	visibility: visible;
	transition-delay: 0s;
}
li.current .image {
	clip: rect(0, 80rem, 50rem, 0);
}
li.current .content h2 {
	transform: translateY(0);
	opacity: 1;
	transition-delay: 1s;
}
li.current .content a {
	transform: translateY(0);
	opacity: 1;
	transition-delay: 1.1s;
}
/* Prev Slide 
------------------------------------*/
li.prev_slide .image {
	clip: rect(0, 0, 50rem, 0);
}
nav {
	position: absolute;
	bottom: 0;
	right: 0;
	background: #fff;
	z-index: 2;
}
.prev, .next, .counter {
	vertical-align: middle;
}
.prev, .next {
	position: relative;
	display: inline-block;
	height: 5rem;
	width: 5rem;
  border: 0;
  cursor: pointer;
  background: transparent;
}
.prev::before, .next::before {
	content: '';
	position: absolute;
	top: 50%;
  left: 0;
	transform: translateY(-50%);
	border: .8rem solid transparent;
	border-right-width: 1rem;
	border-right-color: #000;
	border-left-width: 0;
	width: 0;
	height: 0;
}
.prev::after, .next::after {
	content: '';
	position: absolute;
	top: 50%;
	transform: translateY(-50%) translateZ(0);
	left: .5rem;
	background: #000;
	height: .1rem;
	min-height: 1px;
	width: 2.5rem;
	transition: width .3s;
}
.next::before {
	right: 0;
  left: auto;
	border-left-width: 1rem;
	border-left-color: #000;
	border-right-width: 0;
}
.next::after {
	right: .5rem;
	left: auto;
}
.counter {
	display: inline-block;
	font-size: 4rem;
	font-family: serif;
	font-style: italic;
}
.counter span:last-child::before {
	content: '/';
	margin: 0 1rem;
}
.prev:hover::after, .next:hover::after {
	width: 3.5rem;
}
@media screen and ( max-width: 550px ) {
	.image { width: 100%; }
	.content { padding-right: 2rem; }
	nav { left: 0; right: auto; }
}