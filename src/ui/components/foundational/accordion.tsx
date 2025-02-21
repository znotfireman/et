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

import Fusion, { Children, UsedAs } from "@rbxts/fusion";
import { Scoped } from "scoped";
import type { BaseProps, ChildrenProps, LayoutProps } from "ui/types";

export interface AccordianProps extends Scoped, BaseProps, LayoutProps, ChildrenProps {
	accordianLabel?: UsedAs<string>;
}

export function Accordian({ scope, [Children]: children }: AccordianProps) {
	const collapsed = scope.Value(false);

	return (
		<frame scope={scope}>
			<imagebutton scope={scope}></imagebutton>
			<frame scope={scope} Visible={scope.Computed((use) => !use(collapsed))}>
				{children}
			</frame>
		</frame>
	);
}
