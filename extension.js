({
    name: "analog electronics", // Category Name
    description: "Get  distance from  ZX-sonar",
    author: "mazlogyzop",
    category: "Sensors",
    version: "1.0.1",
    icon: "/static/sonar.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="sonar_read">
                <value name="trig">
                        <shadow type="math_number">
                            <field name="NUM">32</field>
                        </shadow>
                    </value>
                <value name="ANS">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                    </value>
                <value name="sort">
                        <shadow type="math_number">
                            <field name="NUM">3</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});
