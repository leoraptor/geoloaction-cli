package com.awesomeproject; 
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import 	android.hardware.GeomagneticField;

public class CalendarModule extends ReactContextBaseJavaModule {
   CalendarModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
public String getName() {
   return "CalendarModule";
}

@ReactMethod(isBlockingSynchronousMethod = true)
public String printNumbers() {
    StringBuilder numbers = new StringBuilder();
    for (int i = 0; i <= 50; i++) {
        numbers.append(i).append(", ");
    }
    
    String numbersString = numbers.toString();
    Log.d("CalendarModule", "Numbers: " + numbersString);
    return numbersString;

}

@ReactMethod(isBlockingSynchronousMethod = true)
public int seeThisNumber(){
    
    return 2000;
}
}


