#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://localhost:3000}"

echo "Testing valid submission..."
curl -sS -i -X POST "$BASE_URL/api/contact" \
  -H "Content-Type: application/json" \
  --data '{"name":"Test User","email":"test@example.com","phone":"","message":"Hello from curl"}'

echo

echo "Testing validation failure..."
curl -sS -i -X POST "$BASE_URL/api/contact" \
  -H "Content-Type: application/json" \
  --data '{"name":"","email":"not-an-email","message":""}'

echo

echo "Testing rate limit (run repeatedly to trigger 429)..."
for i in 1 2 3 4 5 6; do
  echo "Request #$i"
  curl -sS -o /dev/null -w "%{http_code}\n" -X POST "$BASE_URL/api/contact" \
    -H "Content-Type: application/json" \
    --data '{"name":"Rate Test","email":"ratetest@example.com","phone":"","message":"Rate test"}'
done
