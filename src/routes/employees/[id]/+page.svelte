<script lang="ts">
	import type { Employee } from '$lib/types';
	import { page } from '$app/stores';
	export let data: { employee: Employee };
	$: employee = data?.employee;
	$: id = $page.params.id;
</script>

<div class="text-blue-500 text-xl font-semibold mb-8">
	<a href="/">Frontend</a> <span class="font-light">&gt;</span>
	{employee.name}
</div>
<div class="flex gap-8">
	<div class="w-1/4 ">
		<div class="bg-slate-800 rounded-lg text-white px-8 pt-10 pb-16">
			<div class="w-32 h-32 relative mx-auto rounded-full overflow-hidden">
				{#if id !== undefined}
					<img
						class="object-cover w-0 h-0 absolute max-h-full max-w-full min-w-full min-h-full"
						src={`/placeholder-${id}.jpg`}
						alt={employee.name}
					/>
				{/if}
			</div>
			<div class="text-xl text-center font-semibold mt-4 mb-8">{employee.name}</div>
			<div class="mt-2 mb-3">
				<p class="font-light">01.01.2001</p>
				<p class="border-t text-xs font-bold opacity-30">BIRTHDAY</p>
			</div>
			<div class="mt-2 mb-3">
				<p class="font-light">{employee.education}</p>
				<p class="border-t text-xs font-bold opacity-30">EDUCATION</p>
			</div>
			<div class="mt-2 mb-3">
				<p class="font-light">Team Lead Product Owner</p>
				<p class="border-t text-xs font-bold opacity-30">JOB @ BITGRIP</p>
			</div>
			<div>
				<p class="font-light">{employee.mainSkills}</p>
				<p class="border-t text-xs font-bold opacity-30">MAIN SKILLS</p>
			</div>
		</div>
	</div>

	<div class="w-3/4 rounded-lg  bg-white p-8">
		<h2 class="text-2xl font-bold text-blue-500 mb-8">
			ERSTELLUNG EINER BUSINESS ANALYSE ALS VOR- BEREITUNG EINES WEBSITE-RELAUNCH
		</h2>
		<div class="mt-2 mb-3">
			<p class="font-light">01.2020 - ONGOING</p>
			<p class="text-xs font-bold opacity-30">Zeitraum</p>
		</div>
		<div class="mt-2 mb-3">
			<p class="font-light">Triumph Adler / Utax / BITGRIP GmbH</p>
			<p class="text-xs font-bold opacity-30">Kunde / Arbeitgeber</p>
		</div>
		<div class="mt-2 mb-3">
			<p class="font-light">Product Owner</p>
			<p class="text-xs font-bold opacity-30">Rolle im Projekt</p>
		</div>
		<div class="mt-2 mb-3">
			<p class="font-light">Confluence, JIRA, CoreMedia, CoreMedia LiveContext, node.js</p>
			<p class="text-xs font-bold opacity-30">Technologien &amp; Werkzeuge</p>
		</div>

		<h3 class="font-bold mt-8 mb-2">Projektbeschreibung</h3>
		<ul class="list-disc list-outside ml-4">
			<li>Website-Relaunch für UTAX und TA auf Basis von CoreMedia 10</li>
			<li>
				Nahtlose headless-Integration eines Enterprise Content Management Systems und zahlreichen
				heterogenen Datenquellen und Zielsystemen
			</li>
			<li>Evaluation, Analyse und Setup eines geeigneten PIM-Systems</li>
			<li>Migration von Produktdaten</li>
			<li>Setup CoreMedia 10</li>
			<li>Schnittstellen-Anbindung von CoreMedia 10 an Produktdaten-Quelle (PIM)</li>
			<li>Content-Erstellung &amp; Setup der UTAX und TA Seiten in CoreMedia 10</li>
		</ul>

		<h3 class="font-bold mt-4 mb-2">Aufgaben im Projekt</h3>
		<ul class="list-disc list-outside ml-4">
			<li>Product Owner</li>
			<li>Stakeholder-Management</li>
			<li>
				Durchführung SCRUM-Workshop zum Aufbau eines gleichen Verständnisses (Rollen, Vorgehen,
				Flow)
			</li>
			<li>
				Entwicklung einer IT-Strategie zur Integration einer bestehenden heterogenen Infrastruktur
				zur einheitlichen Darstellung von komplexen Produktdaten
			</li>
			<li>
				Planung und Entwicklung einer Middleware zwischen Client und IT-Infrastruktur des Kunden
			</li>
			<li>
				Formulierung von User-Stories auf Basis von Stakeholder-Anforderungen und kreativem Outputs
				(Konzept/Designs)
			</li>
			<li>Vorbereitung und Durchführung von Plannings &amp; Groomings</li>
			<li>IT-Consulting zur Implementierungs-Strategie &amp; Releaseplanung</li>
			<li>
				Vorbereitung und Durchführung eines dreiwöchigen Sprint-Showcases für Business-Owner und
				Stakeholder
			</li>
			<li>Testing &amp; Qualitätssicherung vor und nach Sprintreviews</li>
		</ul>
	</div>
</div>
