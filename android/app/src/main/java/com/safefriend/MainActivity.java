package com.safefriend;

import com.facebook.react.ReactActivity;
import com.github.wumke.RNImmediatePhoneCall.RNImmediatePhoneCallPackage;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SafeFriend";
  }
  @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }    
}
