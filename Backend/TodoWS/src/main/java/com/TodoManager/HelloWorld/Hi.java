package com.TodoManager.HelloWorld;

public class Hi {
	private String msg;

	public Hi(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "Hi [msg=" + msg + "]";
	}

}
