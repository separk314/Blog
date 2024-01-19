<script>
	import { cubicOut } from 'svelte/easing';

	import image1 from '$assets/1.jpeg';
	import image2 from '$assets/2.jpeg';
	import image3 from '$assets/3.jpeg';
	import image4 from '$assets/4.jpeg';
	import image5 from '$assets/5.jpeg';
	import image6 from '$assets/6.jpeg';
	import image7 from '$assets/7.jpeg';
	import image8 from '$assets/8.jpeg';

	const images = [
		{ src: image1 },
		{ src: image2 },
		{ src: image3 },
		{ src: image4 },
		{ src: image5 },
		{ src: image6 },
		{ src: image7 },
		{ src: image8 }
	];

	let currentIndex = 0;
	function nextSlide() {
		currentIndex = (currentIndex + 1) % images.length;
	}
	setInterval(nextSlide, 4000);
</script>

<div class="flex overflow-hidden">
	{#each images as slide, idx}
		<div
			class="slide flex items-center justify-center"
			style="transform: translateX({currentIndex * -100}%)"
			transition:slide={{ delay: 0, duration: 500, easing: cubicOut }}
		>
			<img src={slide.src} alt="Slide {idx}" />
		</div>
	{/each}
</div>

<div class="flex flex-row justify-center gap-1 mt-6">
	{#each images as slide, idx}
		<button
			class="mr-2 h-3 w-3 rounded-full bg-[#e8e9eb]"
			class:active={currentIndex === idx}
			on:click={() => {
				currentIndex = idx;
				setTimeout(() => {}, 4000);
			}}
		/>
	{/each}
</div>

<div class="flex flex-row mx-10 mt-4">
	<div class="flex-1">
		<h1 class="text-heading2 font-bold">Non-Human Agency</h1>
		<p class="text-headline1">
			Hackney wick , London,UK<br />
			Site area : 8,327 m2<br />
			MA Royal College of Art 2012/2013<br />
			Architecture ADS5_Urban Metabolism,Distinction<br />
			Tutors : Jon Goodbun, Kenny Kinugasa-Tsui and Justin Lau
		</p>
	</div>

	<div class="flex-1 text-body2">
		This project, Non-human agency, explores the potential of various near future smart materials, 
		some of which might be 'grown' out of the complex material geology of post-industrial area Hackney Wick.
		The semi-living research interface will harvest a new natural-polymer – tested here in real living prototypes 
		– generating a new and valuable resource for the local community of post-industrial makers. 
		Further research will explore hybrids of new smart materials and materials from existing local buildings and landscape. 
		This bottom up approach questions traditional notions of architectural production as solely 'building', 
		instead explores emerging ecologies of 'growing' as a new hybrid architectural language.
	</div>
</div>

<style>
	.slide {
		flex: 0 0 auto;
		width: 100%;
		height: 480px;
		transition: transform 0.5s ease;
	}

	.active {
		background-color: #b6b6b8;
	}
</style>
