// Eternal is a full-featured companion plugin for Eternal Towers of Hell
// Copyright (C) 2025 znotfireman
//
// This program is free software: you can redistribute it and/or modify it unde
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
// details.
//
// You should have received a copy of the GNU General Public License along with
// this program. If not, see <https://www.gnu.org/licenses/>.

import { IS_DEV } from "constants";
import { createBuiltinTool } from "lib";
import { debug } from "log";

if (IS_DEV) {
	createBuiltinTool({
		name: "argTest",
		label: "Argument Testing",
		overview: "EToH Deletion 2025",
		description: "EToH Deletion 2025",

		args: [
			{
				name: "booleanArg",
				label: "Boolean argument",
				kind: "boolean",
				default: false,
			},
		],

		run: (ctx) => {
			ctx.onAction("Dump arguments", () => {
				debug(`booleanArg: ${ctx.arg("booleanArg").now()}`);
			});

			ctx.onAction("Assert arguments", () => {
				debug("Asserting booleanArg is boolean");
				ctx.arg("booleanArg").assertBoolean();
			});
		},
	});
}
