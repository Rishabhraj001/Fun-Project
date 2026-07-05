export default function ShoeSwitcher({ shoes, activeId, onChange }) {
  return (
    <div className="shoe-switcher">
      {shoes.map((s) => (
        <button
          key={s.id}
          className={`swatch ${activeId === s.id ? 'is-active' : ''}`}
          style={{ '--swatch-color': s.primary }}
          onClick={() => onChange(s.id)}
          aria-label={`Switch to ${s.name}`}
        > 
          <span className="swatch-dot" />
        </button>
      ))}
    </div>
  )
}
