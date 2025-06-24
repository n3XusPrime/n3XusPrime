# Why neverssl.com Fixes Public Wi-Fi Login Issues on Parrot OS

Recently, I ran into a weird but kind of interesting issue while using my Parrot OS machine in public places like the library or the airport. I was clearly connected to the Wi-Fi network, but couldn’t access the internet at all. It wasn’t just slow — nothing loaded. No login screen, no internet, just timeouts. 

I also noticed that I am not redirected to their captive portals as I am normally supposed to, so I looked into potential issues like DNS, DHCP, etc.

After playing around with it a bit, and with no luck, I tried digging for answers on the internet, and found an interesting solution of going to [neverssl.com](http://neverssl.com) in the browser. And yep — as soon as I typed that in, the captive portal login page popped up, and everything started working right after I logged in.

That led me to ask: why does this specific site fix the issue, and why doesn't it just work automatically like on my phone or Windows laptop?

---

## What’s Going On Behind the Scenes

When we connect to public Wi-Fi (like in a coffee shop, airport, school, etc.), we often get put behind a **captive portal** — that login page where we have to accept terms or enter the credentials before using the internet.

Most operating systems detect this automatically and pop up the login screen for us. But on Linux distros like Parrot OS, it doesn’t always happen. we can be connected to the network but still blocked from going online.

Here’s why:

### 1. Most browsers and apps default to HTTPS

Pretty much every modern website uses HTTPS. That’s really a great necessity for security, but the thing is, **captive portals can’t hijack HTTPS traffic easily**. The connection is encrypted, so when the network tries to intercept and redirect our traffic to a login page, the browser just blocks it or shows nothing at all.

### 2. Parrot OS doesn’t check for connectivity like other systems do

I have noticed other operating systems like Windows, Android, and macOS try to load a known HTTP page when they connect to Wi-Fi. For example:

- Windows goes to `http://www.msftconnecttest.com`
- Android uses `http://connectivitycheck.gstatic.com`
- macOS checks `http://captive.apple.com`

If those pages don’t load correctly, the OS knows we’re behind a captive portal and redirects to the login page.

Parrot OS (and I'm not certain about other Linux distros) **don’t have this feature enabled by default**, especially if they’re privacy-focused or lightweight. That’s why nothing happens when we connect — we’re just sitting behind the portal without even knowing it.

---

## Why neverssl.com Works

`neverssl.com` is specifically designed to only use **plain HTTP**, not HTTPS. That means the request is unencrypted and can be intercepted by the network. When the captive portal sees we trying to reach `http://neverssl.com`, it hijacks that HTTP request and redirects we to the login page.

So basically:

> Most websites don’t work because they use HTTPS, which the portal can’t intercept. `neverssl.com` works because it sticks to HTTP.

Once we log in from there, the portal unlocks our internet access, and everything else starts working again — including HTTPS sites.

---



