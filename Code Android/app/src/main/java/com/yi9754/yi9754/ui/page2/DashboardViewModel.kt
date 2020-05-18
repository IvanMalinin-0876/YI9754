package com.yi9754.yi9754.ui.page2

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import org.json.JSONObject

class DashboardViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is dashboard Fragment"
    }

    var _liveData : MutableLiveData<JSONObject> = MutableLiveData<JSONObject>()

    val text: LiveData<String> = _text
    val JsonData: MutableLiveData<JSONObject> = _liveData







}