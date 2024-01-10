// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')


ServerEvents.recipes(e => {
	e.recipes.createMixing('mysticalagriculture:infusion_crystal', [
	'aether:zanite_gemstone',
	'mysticalagriculture:inferium_essence',
	'mysticalagriculture:inferium_essence',
	'mysticalagriculture:inferium_essence',
	'mysticalagriculture:inferium_essence'
	])
	e.remove({id: 'mysticalagriculture:infusion_crystal'})
	
	e.recipes.createFilling('mysticalagriculture:prosperity_shard', [
		'minecraft:prismarine_shard',
		Fluid.of('minecraft:water', 250)
	])
}


)
