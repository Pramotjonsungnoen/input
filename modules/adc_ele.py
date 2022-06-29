from time import sleep
from machine import Pin
from machine import ADC

def read(analog_pin,A,B):
    adc = ADC(Pin(analog_pin))
    adc.atten(ADC.ATTN_11DB)
    adc.width(ADC.WIDTH_12BIT)
    #if A <= B :
      #  B = 0
    #if A <= B*2 :
        #B = 0
    T = A*(B / 100)/2
    T = int (T)
    if T == 0 :
        T = 1
    B = T
    try:
        a = []   
        for count in range(A):
            a.append(adc.read())
            sleep(0.01)            
        a.sort()
        v = a[B:(A-B)]
        avg = ( sum (v) / len(v) )
        return int(avg)
    except OSError as ex:
        return -1