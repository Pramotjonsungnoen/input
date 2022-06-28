Blockly.Python['adc'] = function(block) {
Blockly.Python.definitions_['import_adc'] = 'import adc_ele';

  //var dropdown_trig = block.getFieldValue('trig');
  var value_seaLevelhPa = Blockly.Python.valueToCode(block, 'trig', Blockly.Python.ORDER_ATOMIC);
  var value_seaLeveltrim = Blockly.Python.valueToCode(block, 'trim', Blockly.Python.ORDER_ATOMIC);
  var value_seaLeveldata = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  //var code = `Ultrasonic.read(32)`;
  var code = `adc_ele.read(${value_seaLevelhPa},${value_seaLeveldata},${value_seaLeveltrim})`;
  return [code, Blockly.Python.ORDER_NONE];
};
