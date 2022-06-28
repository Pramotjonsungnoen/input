Blockly.defineBlocksWithJsonArray([
{
  /*"type": "analog_read",
  "message0": "sonar pin: %1 repeat : %2 sort : %3",
  "args0": [
    {
      "type": "input_value",
      "name": "trig"
      
    },
    {
      "type": "input_value",
      "name": "ANS"
    },
    {
      "type": "input_value",
      "name": "sort"
    }*/
 // ]
 "type": "oled_draw_text",
 "message0": "OLED draw text %1 at (x: %2 , y: %3 )",
 "args0": [
   {
     "type": "input_value",
     "name": "trig"
   },
   {
     "type": "input_value",
     "name": "ANS"
   },
   {
     "type": "input_value",
     "name": "sort"
   }
  ],
  "output": "Number",
  "colour": "#004098",
  "tooltip": "analog ",
  "helpUrl": ""
}
]);
