Hooks.on("init", () => {
	game.settings.register("hide-combat-tracker","hideCombatTracker", {
		name: "Hide combat tracker",
		hint: "Enable this to hide the combat tracker from players.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
});


Hooks.on("renderCombatTracker", async (tracker) => {
	if (!game.user.isGM && game.settings.get("hide-combat-tracker","hideCombatTracker")) {
		ui.sidebar.tabs.combat.element[0].innerText = "";
	}
})