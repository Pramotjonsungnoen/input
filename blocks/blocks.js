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
 "type": "adc",
 "message0": "analog read pin %1  (Data: %2  Trim: %3 (%))",
 "args0": [
   {
     "type": "input_value",
     "name": "trig"
   },
   {
     "type": "input_value",
     "name": "data"
   },
   {
     "type": "input_value",
     "name": "trim"
   }
  ],
  "output": "Number",
  "colour": "#004098",
  "tooltip": "analog ",
  "helpUrl": ""
}
]);
