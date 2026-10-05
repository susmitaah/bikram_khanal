# Icons

**Always use the project's configured icon library for imports.** This project uses `lucide-react` (no `components.json`; `lucide-react` is the installed icon dependency). If the project switches libraries (`tabler` → `@tabler/icons-react`, etc.), use that one instead. Never assume `lucide-react` blindly.

---

## Badge only the "hero" icons; shape = rounded-xl square

Badge an icon only when it leads a card/block (stats, priorities). Use a **rounded-xl square** (matches the site's `rounded-xl` cards; avoids the generic circle look): soft tinted bg + thin ring, `strokeWidth` ~1.75, hover state if the parent is interactive.

```tsx
<span className="grid size-11 place-items-center rounded-xl bg-gold/15 ring-1 ring-gold/40">
  <Icon aria-hidden size={20} strokeWidth={1.75} className="text-maroon" />
</span>
```

Stay **bare** (no badge): icons inside Buttons, inline icons beside text (heading pin, phone/mail/clock rows), nav/menu icons.
Stay **circle** (`rounded-full`): social/action icon buttons only.

---

## Icons in Button use data-icon attribute

Add `data-icon="inline-start"` (prefix) or `data-icon="inline-end"` (suffix) to the icon. No sizing classes on the icon.

**Incorrect:**

```tsx
<Button>
  <SearchIcon className="mr-2 size-4" />
  Search
</Button>
```

**Correct:**

```tsx
<Button>
  <SearchIcon data-icon="inline-start"/>
  Search
</Button>

<Button>
  Next
  <ArrowRightIcon data-icon="inline-end"/>
</Button>
```

---

## No sizing classes on icons inside components

Components handle icon sizing via CSS. Don't add `size-4`, `w-4 h-4`, or other sizing classes to icons inside `Button`, `DropdownMenuItem`, `Alert`, `Sidebar*`, or other shadcn components. Unless the user explicitly asks for custom icon sizes.

**Incorrect:**

```tsx
<Button>
  <SearchIcon className="size-4" data-icon="inline-start" />
  Search
</Button>

<DropdownMenuItem>
  <SettingsIcon className="mr-2 size-4" />
  Settings
</DropdownMenuItem>
```

**Correct:**

```tsx
<Button>
  <SearchIcon data-icon="inline-start" />
  Search
</Button>

<DropdownMenuItem>
  <SettingsIcon />
  Settings
</DropdownMenuItem>
```

---

## Pass icons as component objects, not string keys

Use `icon={CheckIcon}`, not a string key to a lookup map.

**Incorrect:**

```tsx
const iconMap = {
  check: CheckIcon,
  alert: AlertIcon,
}

function StatusBadge({ icon }: { icon: string }) {
  const Icon = iconMap[icon]
  return <Icon />
}

<StatusBadge icon="check" />
```

**Correct:**

```tsx
// Import from the project's configured icon library (e.g. lucide-react, @tabler/icons-react).
import { CheckIcon } from "lucide-react"

function StatusBadge({ icon: Icon }: { icon: React.ComponentType }) {
  return <Icon />
}

<StatusBadge icon={CheckIcon} />
```
