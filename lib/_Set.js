'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _Set;

var _aureoomsJsError = require('aureooms-js-error');

function _Set(BaseSet) {

	var Set = function Set() {
		var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


		this.container = new BaseSet(iterable);
	};

	Set.wrap = function (A) {

		if (A instanceof Set) return A;

		return new Set(A);
	};

	Set._operator = function (method) {

		return function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return method.apply(this, Array.from(args, Set.wrap));
		};
	};

	Set._inclusion = function (A, B) {

		return A._ispropersubset(B) ? -1 : B._ispropersubset(A) ? 1 : 0;
	};

	Set.inclusion = Set._operator(Set._inclusion);

	Set.prototype[Symbol.iterator] = Set.prototype.keys = regeneratorRuntime.mark(function _callee() {
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.delegateYield(this.container, 't0', 1);

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	});

	Set.prototype.len = function () {

		return this.container.size;
	};

	Set.prototype.has = function (key) {

		return this.container.has(key);
	};

	Set.prototype._isdisjoint = function (other) {

		return this._commonkeys(other).next().done;
	};

	Set.prototype.isdisjoint = Set._operator(Set.prototype._isdisjoint);

	Set.prototype._isequal = function (other) {

		return this._issubset(other) && other._issubset(this);
	};

	Set.prototype.isequal = Set._operator(Set.prototype._isequal);

	Set.prototype._issubset = function (other) {

		if (this.len() > other.len()) return false;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var key = _step.value;
				if (!other.has(key)) return false;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return true;
	};

	Set.prototype.issubset = Set._operator(Set.prototype._issubset);

	Set.prototype._ispropersubset = function (other) {

		return this._issubset(other) && !this._issuperset(other);
	};

	Set.prototype.ispropersubset = Set._operator(Set.prototype._ispropersubset);

	Set.prototype._issuperset = function (other) {

		return other._issubset(this);
	};

	Set.prototype.issuperset = Set._operator(Set.prototype._issuperset);

	Set.prototype._ispropersuperset = function (other) {

		return this._issuperset(other) && !this._issubset(other);
	};

	Set.prototype.ispropersuperset = Set._operator(Set.prototype._ispropersuperset);

	Set.prototype.union = Set.prototype._union = function () {
		var _copy;

		return (_copy = this.copy())._update.apply(_copy, arguments);
	};

	Set.prototype._commonkeys = regeneratorRuntime.mark(function _callee2() {
		for (var _len2 = arguments.length, others = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			others[_key2] = arguments[_key2];
		}

		var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, key, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, other;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						_context2.prev = 3;
						_iterator2 = this[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							_context2.next = 38;
							break;
						}

						key = _step2.value;
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						_context2.prev = 10;
						_iterator3 = others[Symbol.iterator]();

					case 12:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							_context2.next = 19;
							break;
						}

						other = _step3.value;

						if (other.has(key)) {
							_context2.next = 16;
							break;
						}

						return _context2.abrupt('continue', 35);

					case 16:
						_iteratorNormalCompletion3 = true;
						_context2.next = 12;
						break;

					case 19:
						_context2.next = 25;
						break;

					case 21:
						_context2.prev = 21;
						_context2.t0 = _context2['catch'](10);
						_didIteratorError3 = true;
						_iteratorError3 = _context2.t0;

					case 25:
						_context2.prev = 25;
						_context2.prev = 26;

						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}

					case 28:
						_context2.prev = 28;

						if (!_didIteratorError3) {
							_context2.next = 31;
							break;
						}

						throw _iteratorError3;

					case 31:
						return _context2.finish(28);

					case 32:
						return _context2.finish(25);

					case 33:
						_context2.next = 35;
						return key;

					case 35:
						_iteratorNormalCompletion2 = true;
						_context2.next = 5;
						break;

					case 38:
						_context2.next = 44;
						break;

					case 40:
						_context2.prev = 40;
						_context2.t1 = _context2['catch'](3);
						_didIteratorError2 = true;
						_iteratorError2 = _context2.t1;

					case 44:
						_context2.prev = 44;
						_context2.prev = 45;

						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}

					case 47:
						_context2.prev = 47;

						if (!_didIteratorError2) {
							_context2.next = 50;
							break;
						}

						throw _iteratorError2;

					case 50:
						return _context2.finish(47);

					case 51:
						return _context2.finish(44);

					case 52:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this, [[3, 40, 44, 52], [10, 21, 25, 33], [26,, 28, 32], [45,, 47, 51]]);
	});

	Set.prototype._intersection = function () {

		return new Set(this._commonkeys.apply(this, arguments));
	};

	Set.prototype.intersection = Set._operator(Set.prototype._intersection);

	Set.prototype.difference = Set.prototype._difference = function () {
		var _copy2;

		return (_copy2 = this.copy())._difference_update.apply(_copy2, arguments);
	};

	Set.prototype.symmetric_difference = Set.prototype._symmetric_difference = function (other) {

		return this.copy()._symmetric_difference_update(other);
	};

	Set.prototype.copy = function () {

		return new Set(this);
	};

	Set.prototype.update = Set.prototype._update = function () {
		for (var _len3 = arguments.length, others = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			others[_key3] = arguments[_key3];
		}

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {

			for (var _iterator4 = others[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var other = _step4.value;
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {

					for (var _iterator5 = other[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var key = _step5.value;
						this.add(key);
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		return this;
	};

	Set.prototype._intersection_update = function () {

		var intersection = this._intersection.apply(this, arguments);

		this.clear().update(intersection);

		return this;
	};

	Set.prototype.intersection_update = Set._operator(Set.prototype._intersection_update);

	Set.prototype.difference_update = Set.prototype._difference_update = function () {
		for (var _len4 = arguments.length, others = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			others[_key4] = arguments[_key4];
		}

		var _iteratorNormalCompletion6 = true;
		var _didIteratorError6 = false;
		var _iteratorError6 = undefined;

		try {

			for (var _iterator6 = others[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
				var other = _step6.value;
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {

					for (var _iterator7 = other[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var key = _step7.value;
						this.discard(key);
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError6 = true;
			_iteratorError6 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion6 && _iterator6.return) {
					_iterator6.return();
				}
			} finally {
				if (_didIteratorError6) {
					throw _iteratorError6;
				}
			}
		}

		return this;
	};

	Set.prototype.symmetric_difference_update = Set.prototype._symmetric_difference_update = function (other) {
		var _iteratorNormalCompletion8 = true;
		var _didIteratorError8 = false;
		var _iteratorError8 = undefined;

		try {

			for (var _iterator8 = other[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
				var key = _step8.value;


				if (this.has(key)) this.discard(key);else this.add(key);
			}
		} catch (err) {
			_didIteratorError8 = true;
			_iteratorError8 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion8 && _iterator8.return) {
					_iterator8.return();
				}
			} finally {
				if (_didIteratorError8) {
					throw _iteratorError8;
				}
			}
		}

		return this;
	};

	Set.prototype.add = function (key) {

		this.container.add(key);

		return this;
	};

	Set.prototype.remove = function (key) {

		if (!this.container.delete(key)) throw new _aureoomsJsError.KeyError();

		return this;
	};

	Set.prototype.discard = function (key) {

		this.container.delete(key);

		return this;
	};

	Set.prototype.pop = function () {

		if (this.len() === 0) throw new _aureoomsJsError.KeyError();

		var key = this.keys().next().value;

		this.discard(key);

		return key;
	};

	Set.prototype.clear = function () {

		this.container.clear();

		return this;
	};

	return Set;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fU2V0LmpzIl0sIm5hbWVzIjpbIl9TZXQiLCJCYXNlU2V0IiwiU2V0IiwiaXRlcmFibGUiLCJjb250YWluZXIiLCJ3cmFwIiwiQSIsIl9vcGVyYXRvciIsIm1ldGhvZCIsImFyZ3MiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsIl9pbmNsdXNpb24iLCJCIiwiX2lzcHJvcGVyc3Vic2V0IiwiaW5jbHVzaW9uIiwicHJvdG90eXBlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJrZXlzIiwibGVuIiwic2l6ZSIsImhhcyIsImtleSIsIl9pc2Rpc2pvaW50Iiwib3RoZXIiLCJfY29tbW9ua2V5cyIsIm5leHQiLCJkb25lIiwiaXNkaXNqb2ludCIsIl9pc2VxdWFsIiwiX2lzc3Vic2V0IiwiaXNlcXVhbCIsImlzc3Vic2V0IiwiX2lzc3VwZXJzZXQiLCJpc3Byb3BlcnN1YnNldCIsImlzc3VwZXJzZXQiLCJfaXNwcm9wZXJzdXBlcnNldCIsImlzcHJvcGVyc3VwZXJzZXQiLCJ1bmlvbiIsIl91bmlvbiIsImNvcHkiLCJfdXBkYXRlIiwib3RoZXJzIiwiX2ludGVyc2VjdGlvbiIsImludGVyc2VjdGlvbiIsImRpZmZlcmVuY2UiLCJfZGlmZmVyZW5jZSIsIl9kaWZmZXJlbmNlX3VwZGF0ZSIsInN5bW1ldHJpY19kaWZmZXJlbmNlIiwiX3N5bW1ldHJpY19kaWZmZXJlbmNlIiwiX3N5bW1ldHJpY19kaWZmZXJlbmNlX3VwZGF0ZSIsInVwZGF0ZSIsImFkZCIsIl9pbnRlcnNlY3Rpb25fdXBkYXRlIiwiY2xlYXIiLCJpbnRlcnNlY3Rpb25fdXBkYXRlIiwiZGlmZmVyZW5jZV91cGRhdGUiLCJkaXNjYXJkIiwic3ltbWV0cmljX2RpZmZlcmVuY2VfdXBkYXRlIiwicmVtb3ZlIiwiZGVsZXRlIiwicG9wIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsSTs7QUFGeEI7O0FBRWUsU0FBU0EsSUFBVCxDQUFnQkMsT0FBaEIsRUFBMEI7O0FBRXhDLEtB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LElBQVA7QUFFQSxFQVpEOztBQWNBdEIsS0FBSWUsU0FBSixDQUFjcUMsR0FBZCxHQUFvQixVQUFXOUIsR0FBWCxFQUFpQjs7QUFFcEMsT0FBS3BCLFNBQUwsQ0FBZWtELEdBQWYsQ0FBb0I5QixHQUFwQjs7QUFFQSxTQUFPLElBQVA7QUFFQSxFQU5EOztBQVFBdEIsS0FBSWUsU0FBSixDQUFjNEMsTUFBZCxHQUF1QixVQUFXckMsR0FBWCxFQUFpQjs7QUFFdkMsTUFBSyxDQUFDLEtBQUtwQixTQUFMLENBQWUwRCxNQUFmLENBQXVCdEMsR0FBdkIsQ0FBTixFQUFxQyxNQUFNLCtCQUFOOztBQUVyQyxTQUFPLElBQVA7QUFFQSxFQU5EOztBQVFBdEIsS0FBSWUsU0FBSixDQUFjMEMsT0FBZCxHQUF3QixVQUFXbkMsR0FBWCxFQUFpQjs7QUFFeEMsT0FBS3BCLFNBQUwsQ0FBZTBELE1BQWYsQ0FBdUJ0QyxHQUF2Qjs7QUFFQSxTQUFPLElBQVA7QUFFQSxFQU5EOztBQVFBdEIsS0FBSWUsU0FBSixDQUFjOEMsR0FBZCxHQUFvQixZQUFhOztBQUVoQyxNQUFLLEtBQUsxQyxHQUFMLE9BQWdCLENBQXJCLEVBQXlCLE1BQU0sK0JBQU47O0FBRXpCLE1BQU1HLE1BQU0sS0FBS0osSUFBTCxHQUFhUSxJQUFiLEdBQXFCb0MsS0FBakM7O0FBRUEsT0FBS0wsT0FBTCxDQUFjbkMsR0FBZDs7QUFFQSxTQUFPQSxHQUFQO0FBRUEsRUFWRDs7QUFZQXRCLEtBQUllLFNBQUosQ0FBY3VDLEtBQWQsR0FBc0IsWUFBYTs7QUFFbEMsT0FBS3BELFNBQUwsQ0FBZW9ELEtBQWY7O0FBRUEsU0FBTyxJQUFQO0FBRUEsRUFORDs7QUFRQSxRQUFPdEQsR0FBUDtBQUVBIiwiZmlsZSI6Il9TZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlFcnJvciB9IGZyb20gJ2F1cmVvb21zLWpzLWVycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9TZXQgKCBCYXNlU2V0ICkge1xuXG5cdGNvbnN0IFNldCA9IGZ1bmN0aW9uICggaXRlcmFibGUgPSBudWxsICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgQmFzZVNldCggaXRlcmFibGUgKSA7XG5cblx0fSA7XG5cblx0U2V0LndyYXAgPSBmdW5jdGlvbiAoIEEgKSB7XG5cblx0XHRpZiAoIEEgaW5zdGFuY2VvZiBTZXQgKSByZXR1cm4gQSA7XG5cblx0XHRyZXR1cm4gbmV3IFNldCggQSApIDtcblxuXHR9IDtcblxuXHRTZXQuX29wZXJhdG9yID0gZnVuY3Rpb24gKCBtZXRob2QgKSB7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gKCAuLi5hcmdzICkge1xuXG5cdFx0XHRyZXR1cm4gbWV0aG9kLmFwcGx5KCB0aGlzICwgQXJyYXkuZnJvbSggYXJncyAsIFNldC53cmFwICkgKSA7XG5cblx0XHR9IDtcblxuXHR9IDtcblxuXHRTZXQuX2luY2x1c2lvbiA9IGZ1bmN0aW9uICggQSAsIEIgKSB7XG5cblx0XHRyZXR1cm4gQS5faXNwcm9wZXJzdWJzZXQoIEIgKSA/IC0xIDogQi5faXNwcm9wZXJzdWJzZXQoIEEgKSA/IDEgOiAwIDtcblxuXHR9IDtcblxuXHRTZXQuaW5jbHVzaW9uID0gU2V0Ll9vcGVyYXRvciggU2V0Ll9pbmNsdXNpb24gKSA7XG5cblx0U2V0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID1cblx0U2V0LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24qICggKSB7XG5cblx0XHR5aWVsZCogdGhpcy5jb250YWluZXIgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUubGVuID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5zaXplIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLmhhcygga2V5ICkgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuX2lzZGlzam9pbnQgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuX2NvbW1vbmtleXMoIG90aGVyICkubmV4dCggKS5kb25lIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmlzZGlzam9pbnQgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pc2Rpc2pvaW50ICkgO1xuXG5cdFNldC5wcm90b3R5cGUuX2lzZXF1YWwgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuX2lzc3Vic2V0KCBvdGhlciApICYmIG90aGVyLl9pc3N1YnNldCggdGhpcyApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmlzZXF1YWwgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pc2VxdWFsICkgO1xuXG5cdFNldC5wcm90b3R5cGUuX2lzc3Vic2V0ID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdGlmICggdGhpcy5sZW4oICkgPiBvdGhlci5sZW4oICkgKSByZXR1cm4gZmFsc2UgO1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiB0aGlzICkgaWYgKCAhb3RoZXIuaGFzKCBrZXkgKSApIHJldHVybiBmYWxzZSA7XG5cblx0XHRyZXR1cm4gdHJ1ZSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc3N1YnNldCA9IFNldC5fb3BlcmF0b3IoIFNldC5wcm90b3R5cGUuX2lzc3Vic2V0ICkgO1xuXG5cdFNldC5wcm90b3R5cGUuX2lzcHJvcGVyc3Vic2V0ID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdHJldHVybiB0aGlzLl9pc3N1YnNldCggb3RoZXIgKSAmJiAhdGhpcy5faXNzdXBlcnNldCggb3RoZXIgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5pc3Byb3BlcnN1YnNldCA9IFNldC5fb3BlcmF0b3IoIFNldC5wcm90b3R5cGUuX2lzcHJvcGVyc3Vic2V0ICkgO1xuXG5cdFNldC5wcm90b3R5cGUuX2lzc3VwZXJzZXQgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0cmV0dXJuIG90aGVyLl9pc3N1YnNldCggdGhpcyApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmlzc3VwZXJzZXQgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pc3N1cGVyc2V0ICkgO1xuXG5cdFNldC5wcm90b3R5cGUuX2lzcHJvcGVyc3VwZXJzZXQgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuX2lzc3VwZXJzZXQoIG90aGVyICkgJiYgIXRoaXMuX2lzc3Vic2V0KCBvdGhlciApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmlzcHJvcGVyc3VwZXJzZXQgPSBTZXQuX29wZXJhdG9yKCBTZXQucHJvdG90eXBlLl9pc3Byb3BlcnN1cGVyc2V0ICkgO1xuXG5cdFNldC5wcm90b3R5cGUudW5pb24gPVxuXHRTZXQucHJvdG90eXBlLl91bmlvbiA9IGZ1bmN0aW9uICggLi4ub3RoZXJzICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29weSggKS5fdXBkYXRlKCAuLi5vdGhlcnMgKSA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5fY29tbW9ua2V5cyA9IGZ1bmN0aW9uKiAoIC4uLm90aGVycyApIHtcblxuXHRcdGtleXMgOiBmb3IgKCBsZXQga2V5IG9mIHRoaXMgKSB7XG5cblx0XHRcdGZvciAoIGxldCBvdGhlciBvZiBvdGhlcnMgKSB7XG5cblx0XHRcdFx0aWYgKCAhb3RoZXIuaGFzKCBrZXkgKSApIGNvbnRpbnVlIGtleXMgO1xuXG5cdFx0XHR9XG5cblx0XHRcdHlpZWxkIGtleSA7XG5cblx0XHR9XG5cblx0fSA7XG5cblxuXHRTZXQucHJvdG90eXBlLl9pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAoIC4uLm90aGVycyApIHtcblxuXHRcdHJldHVybiBuZXcgU2V0KCB0aGlzLl9jb21tb25rZXlzKCAuLi5vdGhlcnMgKSApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmludGVyc2VjdGlvbiA9IFNldC5fb3BlcmF0b3IoIFNldC5wcm90b3R5cGUuX2ludGVyc2VjdGlvbiApIDtcblxuXHRTZXQucHJvdG90eXBlLmRpZmZlcmVuY2UgPVxuXHRTZXQucHJvdG90eXBlLl9kaWZmZXJlbmNlID0gZnVuY3Rpb24gKCAuLi5vdGhlcnMgKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb3B5KCApLl9kaWZmZXJlbmNlX3VwZGF0ZSggLi4ub3RoZXJzICkgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuc3ltbWV0cmljX2RpZmZlcmVuY2UgPVxuXHRTZXQucHJvdG90eXBlLl9zeW1tZXRyaWNfZGlmZmVyZW5jZSA9IGZ1bmN0aW9uICggb3RoZXIgKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb3B5KCApLl9zeW1tZXRyaWNfZGlmZmVyZW5jZV91cGRhdGUoIG90aGVyICkgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHRyZXR1cm4gbmV3IFNldCggdGhpcyApIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLnVwZGF0ZSA9XG5cdFNldC5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICggLi4ub3RoZXJzICkge1xuXG5cdFx0Zm9yICggbGV0IG90aGVyIG9mIG90aGVycyApIHtcblxuXHRcdFx0Zm9yICggbGV0IGtleSBvZiBvdGhlciApIHRoaXMuYWRkKCBrZXkgKSA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5faW50ZXJzZWN0aW9uX3VwZGF0ZSA9IGZ1bmN0aW9uICggLi4ub3RoZXJzICkge1xuXG5cdFx0Y29uc3QgaW50ZXJzZWN0aW9uID0gdGhpcy5faW50ZXJzZWN0aW9uKCAuLi5vdGhlcnMgKSA7XG5cblx0XHR0aGlzLmNsZWFyKCApLnVwZGF0ZSggaW50ZXJzZWN0aW9uICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuaW50ZXJzZWN0aW9uX3VwZGF0ZSA9IFNldC5fb3BlcmF0b3IoIFNldC5wcm90b3R5cGUuX2ludGVyc2VjdGlvbl91cGRhdGUgKSA7XG5cblx0U2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlX3VwZGF0ZSA9XG5cdFNldC5wcm90b3R5cGUuX2RpZmZlcmVuY2VfdXBkYXRlID0gZnVuY3Rpb24gKCAuLi5vdGhlcnMgKSB7XG5cblx0XHRmb3IgKCBsZXQgb3RoZXIgb2Ygb3RoZXJzICkge1xuXG5cdFx0XHRmb3IgKCBsZXQga2V5IG9mIG90aGVyICkgdGhpcy5kaXNjYXJkKCBrZXkgKSA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5zeW1tZXRyaWNfZGlmZmVyZW5jZV91cGRhdGUgPVxuXHRTZXQucHJvdG90eXBlLl9zeW1tZXRyaWNfZGlmZmVyZW5jZV91cGRhdGUgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiBvdGhlciApIHtcblxuXHRcdFx0aWYgKCB0aGlzLmhhcygga2V5ICkgKSB0aGlzLmRpc2NhcmQoIGtleSApIDtcblx0XHRcdGVsc2UgdGhpcy5hZGQoIGtleSApIDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzIDtcblxuXHR9IDtcblxuXHRTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIuYWRkKCBrZXkgKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdGlmICggIXRoaXMuY29udGFpbmVyLmRlbGV0ZSgga2V5ICkgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuZGlzY2FyZCA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIuZGVsZXRlKCBrZXkgKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0U2V0LnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0aWYgKCB0aGlzLmxlbiggKSA9PT0gMCApIHRocm93IG5ldyBLZXlFcnJvciggKSA7XG5cblx0XHRjb25zdCBrZXkgPSB0aGlzLmtleXMoICkubmV4dCggKS52YWx1ZSA7XG5cblx0XHR0aGlzLmRpc2NhcmQoIGtleSApIDtcblxuXHRcdHJldHVybiBrZXkgO1xuXG5cdH0gO1xuXG5cdFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIuY2xlYXIoICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdHJldHVybiBTZXQgO1xuXG59XG4iXX0=