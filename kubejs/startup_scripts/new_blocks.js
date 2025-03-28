StartupEvents.registry('block', event => {
    event.create('sandy_gravel')
        .displayName('Sandy Gravel')
        .soundType('gravel')
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock('minecraft:mineable/shovel')
        .textureAll('kubejs:block/sandy_gravel');

    event.create('argent_portal_frame')
        .displayName('Argent Portal Frame')
        .soundType('metal')
        .hardness(6.0)
        .resistance(20.0)
        .textureAll('kubejs:block/argent_portal_frame')
        .model('kubejs:block/argent_portal_frame')
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
    event.create('netherrack_silver_ore')
        .displayName('Netherrack Silver Ore')
        .soundType('nether_ore')
        .hardness(2.0)
        .resistance(5.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .textureAll('kubejs:block/netherrack_silver_ore');
    event.create('netherrack_lead_ore')
        .displayName('Netherrack Lead Ore')
        .soundType('nether_ore')
        .hardness(2.0)
        .resistance(5.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .textureAll('kubejs:block/netherrack_lead_ore');
})