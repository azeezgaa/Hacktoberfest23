(function executeRule(current, previous /*null when async*/) {
	/*
Replace table_name with the table name on which you're writing a BR, ex:cmdb_ci_server
Replace unique_field with the field which you're taking as a coalese field, ex: serial_number
 */
	var gr = new GlideRecord("<table_name>");
	gr.addQuery("<unique_field>", current.<unique_field_name>);
	gr.query();
	if (gr.next()) {
		gs.addErrorMessage("Entry for this <field_name> already exists");
		current.setAbortAction(true);
	}
})(current, previous);
