      const cityLat = 13.0827;
      const cityLon = 80.2707;
      const map = L.map("map").setView([cityLat, cityLon], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      L.marker([cityLat, cityLon]).addTo(map).bindPopup("Chennai").openPopup();
