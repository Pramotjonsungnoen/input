Blockly.Python['analog_read'] = function(block) {
Blockly.Python.definitions_['import_analog'] = 'import analog';

  //var dropdown_trig = block.getFieldValue('trig');
  var value_seaLevelhPa = Blockly.Python.valueToCode(block, 'trig', Blockly.Python.ORDER_ATOMIC);
  var value_seaLevelhPa = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_seaLevelhPa = Blockly.Python.valueToCode(block, 'trim', Blockly.Python.ORDER_ATOMIC);
  //var code = `Ultrasonic.read(32)`;
  var code = `analog.read(${value_seaLevelhPa})`;
  return [code, Blockly.Python.ORDER_NONE];
};
