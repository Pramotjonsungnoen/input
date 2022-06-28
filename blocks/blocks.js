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
  "type": "analog_read",
  "message0": "pin %1 repeat: %2 sort: %3 ",
  "args0": [
      {
        "type": "input_value",
        "name": "trig"
      },
      {
        "type": "input_value",
        "name": "repeat"
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
