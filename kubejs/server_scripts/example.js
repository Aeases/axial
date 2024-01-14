// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info("Hello, World! (Loaded server scripts)")

ServerEvents.recipes((e) => {
  e.recipes.createMixing("mysticalagriculture:infusion_crystal", ["aether:zanite_gemstone", "mysticalagriculture:inferium_essence", "mysticalagriculture:inferium_essence", "mysticalagriculture:inferium_essence", "mysticalagriculture:inferium_essence"])
  e.remove({ id: "mysticalagriculture:infusion_crystal" })

  e.recipes.createFilling("mysticalagriculture:prosperity_shard", ["minecraft:prismarine_shard", Fluid.of("minecraft:water", 250)])

  function RemoveRegularAndBlasting(s) {
    e.remove(s)
    e.remove(`${s}_blasting`)
  }
  e.remove({ id: "alltheores:brass_dust_from_alloy_blending" })
  RemoveRegularAndBlasting("alltheores:zinc_ingot_from_slate_ore")
  RemoveRegularAndBlasting("alltheores:zinc_ingot_from_raw")
  RemoveRegularAndBlasting("alltheores:zinc_ingot_from_ore")
  function AddRegularAndBlasting(i, o) {
    e.smelting(o, i)
    e.blasting(o, i)
  }
  AddRegularAndBlasting("alltheores:raw_zinc", "create:zinc_ingot")
  AddRegularAndBlasting("alltheores:deepslate_zinc_ore", "create:zinc_ingot")
  AddRegularAndBlasting("alltheores:zinc_ore", "create:zinc_ingot")
})
