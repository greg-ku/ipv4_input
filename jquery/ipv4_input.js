(function($) {
	// private functions
	var backup = function(index) {
		var input = this;
		if (index !== undefined) {
			input.prevValues[index] = $($(input).find(".ipv4-cell")[index]).val();
		} else {
			$(input).find(".ipv4-cell").each(function(i, cell) {
				input.prevValues[i] = $(cell).val();
			});
		}
	};

	var revert = function(index) {
		var input = this;
		if (index !== undefined) {
			$($(input).find(".ipv4-cell")[index]).val(input.prevValues[index]);
		} else {
			$(input).find(".ipv4-cell").each(function(i, cell) {
				$(cell).val(input.prevValues);
			});
		}
	};

	var selectCell = function(index) {
		var input = this;
		if (index === undefined && index < 0 && index > 3) return;
		$($(input).find(".ipv4-cell")[index]).focus();
	};

	var isValidIPStr = function(ipString) {
		if (typeof ipString !== "string") return false;

		var ipStrArray = ipString.split(".");
		if (ipStrArray.length !== 4) return false;

		return ipStrArray.reduce(function(prev, cur) {
			if (prev === false || cur.length === 0) return false;
			return (Number(cur) >= 0 && Number(cur) <= 255) ? true : false;
		}, true);
	};

	var getCurIPStr = function() {
		var str = "";
		this.find(".ipv4-cell").each(function(index, element) {
			str += (index == 0) ? $(element).val() : "." + $(element).val();
		});
		return str;
	};

	// function for text input cell
	var getCursorPosition = function() {
		var cell = this;
		if ('selectionStart' in cell) {
			// Standard-compliant browsers
			return cell.selectionStart;
		} else if (document.selection) {
			// IE
			cell.focus();
			var sel = document.selection.createRange();
			var selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -cell.value.length);
			return sel.text.length - selLen;
		}
		throw new Error("cell is not an input");
	};

	$.fn.ipv4_input = function(action, value) {
		this.each(function() {
			// only initialize in the first time
			if ($(this).hasClass("ipv4-input")) return;
			var input = this;
			input.prevValues = [];


			$(input).toggleClass("ipv4-input", true);
			$(input).html(
				'<input type="text" class="ipv4-cell" />' +
				'<label class="ipv4-dot">.</label>' +
				'<input type="text" class="ipv4-cell" />' +
				'<label class="ipv4-dot">.</label>' +
				'<input type="text" class="ipv4-cell" />' +
				'<label class="ipv4-dot">.</label>' +
				'<input type="text" class="ipv4-cell" />'
			);


			$(this).find(".ipv4-cell").focus(function() {
				$(this).select(); // input select all when tab in
				$(input).toggleClass("selected", true);
			});

			$(this).find(".ipv4-cell").focusout(function() {
				$(input).toggleClass("selected", false);
			});

			$(this).find(".ipv4-cell").each(function(index, cell) {
				$(cell).keydown(function(e) {
					if(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105)
					{	// numbers, backup last status
						backup.call(input, index);
					}
					else if(e.keyCode == 37 || e.keyCode == 39)
					{	// left key ,right key
						if (e.keyCode == 37 && getCursorPosition.call(cell) === 0)
						{
							selectCell.call(input, index - 1);
							e.preventDefault();
						}
						else if (e.keyCode == 39 && getCursorPosition.call(cell) === $(cell).val().length)
						{
							selectCell.call(input, index + 1);
							e.preventDefault();
						}
					}
					else if(e.keyCode == 9)
					{	// allow tab
					}
					else if(e.keyCode == 8 || e.keyCode == 46)
					{	// allow backspace, delete
					}
					else
					{
						e.preventDefault();
					}
				});

				$(cell).keyup(function(e) {
					if(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105)
					{	// numbers
						var val = $(this).val();
						var num = Number(val);

						if (num > 255)
							revert.call(input, index);
						else if (val.length > 1 && val[0] === "0")
							revert.call(input, index);
						else if (val.length === 3)
							selectCell.call(input, index + 1)
					}
				});
			});
		});

		if (action == "value") {
			if (value === undefined)	// get func
				return getCurIPStr.call(this);

			// set func
			if (!isValidIPStr(value)) throw new Error("invalid ip address");

			var strArray = value.split(".");
			this.find(".ipv4-cell").each(function(index, cell) {
				$(cell).val(strArray[index]);
			});
		}

		if (action == "valid") {
			return isValidIPStr(getCurIPStr.call(this));
		}

		if (action == "clear") {
			this.find(".ipv4-cell").each(function(index, cell) {
				$(cell).val("");
			});
		}

		return this;
	};

}(jQuery));
