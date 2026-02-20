# Regen Creatives
Growth Driven Design | Digital Marketing | Web Design | Voice Search Optimization

## Contact form backend

The contact form at `/contact` now submits to `POST /api/contact` with JSON.

### Behavior
- Client-side validation for required fields and email format.
- Server-side validation with structured field errors.
- IP-based rate limiting (in-memory) controlled by environment variables.
- Durable submission storage in a JSONL file.

### Environment variables
- `CONTACT_RATE_LIMIT_MAX` (default: `5`)
- `CONTACT_RATE_LIMIT_WINDOW_MS` (default: `900000`, i.e. 15 minutes)
- `CONTACT_STORAGE_PATH` (default: `data/contact-submissions.jsonl`)

### Run locally
```bash
pnpm dev
```

### Manual API test
Use the script below while the dev server is running:

```bash
./scripts/test-contact-form.sh
```

Or pass a custom base URL:

```bash
./scripts/test-contact-form.sh http://localhost:3000
```
