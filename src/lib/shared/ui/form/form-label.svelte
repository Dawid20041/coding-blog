<script lang="ts">
	import type { Label as LabelPrimitive } from "bits-ui";
	import { getFormField } from "formsnap";
	import { cn } from "$lib/shared/utils";
	import { Label } from "$lib/shared/ui/label";

	type $$Props = LabelPrimitive.Props;

	let className: $$Props["class"] = undefined;
	export { className as class };

	const { errors, ids } = getFormField();
</script>

<Label
	for={$ids.input}
	class={cn($errors && "text-destructive", className)}
	{...$$restProps}
>
	<slot />
</Label>
