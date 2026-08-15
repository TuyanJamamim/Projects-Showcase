# Emergency Service Directory

A simple, responsive Emergency Hotline Directory website for the Government of the People's Republic of Bangladesh.  
Users can quickly view important emergency numbers, copy them, call them (with coin deduction), like services (heart count), and track call history.

Built as **Assignment-05**.

---

## Features

### Navbar
- Logo + Website name (“Emergency Service”)
- Heart count (increases when any card heart is clicked)
- Coin count (starts at **100**)
- Copy count

### Hero / Banner Section
- Green gradient background
- Centered logo
- Title: **Emergency Service Directory**
- Slogan about Government Emergency Services

### Main Section
- **Left side:** Grid of emergency service cards (minimum 6–7 cards)
- **Right side:** Call History panel

#### Each Card Contains:
- Service icon
- Service name
- Short English description
- Hotline number
- Category badge
- Heart icon (clickable)
- **Copy** button
- **Call** button

#### Available Services:
1. National Emergency Number → 999
2. Police Helpline → 999
3. Fire Service → 999
4. Ambulance Service → 1994-999999
5. Women & Children Helpline → 109
6. Anti-Corruption Helpline → 106
7. Electricity Helpline → 16216

### Call History
- Shows service name, number, and exact call time
- **Clear** button to empty the history

---

## Functionalities

| Feature              | Behavior |
|----------------------|----------|
| **Heart Icon**       | Increases the heart counter in the navbar |
| **Call Button**      | - Shows alert with service name + number<br>- Deducts **20 coins**<br>- If coins < 20 → shows “not enough balance” alert and stops<br>- Adds entry to Call History with current local time |
| **Copy Button**      | - Increases copy counter<br>- Shows alert<br>- Copies the number to clipboard |
| **Clear History**    | Empties the entire call history section |

---

## Technologies Used
- HTML5
- Tailwind CSS + DaisyUI
- Font Awesome icons
- Vanilla JavaScript (no frameworks)

---

## Project Structure