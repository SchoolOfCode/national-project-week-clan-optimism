import React from "react";

export default function HostEventForm() {
  return (
    <section>
      <form>
        <input id="event-title" type="text" placeholder="event title..." />
        <input id="event-date" type="date" />
        <input
          id="event-desc"
          type="text"
          placeholder="event description... "
        />
        <select
          name="start-time"
          type="list"
          required="true"
          label="start-time"
          description="start-time"
          class="input-medium validate-time"
        >
          <option value="07:00:00">07:00</option>
          <option value="07:30:00">07:30</option>
          <option value="08:00:00">08:00</option>
          <option value="08:30:00">08:30</option>
          <option value="09:00:00">09:00</option>
          <option value="09:30:00">09:30</option>
          <option value="10:00:00">10:00</option>
          <option value="10:30:00">10:30</option>
          <option value="11:00:00">11:00</option>
          <option value="11:30:00">11:30</option>
          <option value="12:00:00" selected>
            12:00
          </option>
          <option value="12:30:00">12:30</option>
          <option value="13:00:00">13:00</option>
          <option value="13:30:00">13:30</option>
          <option value="14:00:00">14:00</option>
          <option value="14:30:00">14:30</option>
          <option value="15:00:00">15:00</option>
          <option value="15:30:00">15:30</option>
          <option value="16:00:00">16:00</option>
          <option value="16:30:00">16:30</option>
          <option value="17:00:00">17:00</option>
        </select>
        <select
          name="end-time"
          type="list"
          required="true"
          label="end-time"
          description="end-time"
          class="input-medium validate-time"
        >
          <option value="07:00:00">07:00</option>
          <option value="07:30:00">07:30</option>
          <option value="08:00:00">08:00</option>
          <option value="08:30:00">08:30</option>
          <option value="09:00:00">09:00</option>
          <option value="09:30:00">09:30</option>
          <option value="10:00:00">10:00</option>
          <option value="10:30:00">10:30</option>
          <option value="11:00:00">11:00</option>
          <option value="11:30:00">11:30</option>
          <option value="12:00:00" selected>
            12:00
          </option>
          <option value="12:30:00">12:30</option>
          <option value="13:00:00">13:00</option>
          <option value="13:30:00">13:30</option>
          <option value="14:00:00">14:00</option>
          <option value="14:30:00">14:30</option>
          <option value="15:00:00">15:00</option>
          <option value="15:30:00">15:30</option>
          <option value="16:00:00">16:00</option>
          <option value="16:30:00">16:30</option>
          <option value="17:00:00" selected>
            17:00
          </option>
        </select>
        <select>
          <option value="Class Schedule">Class Schedule</option>
          <option value="Guest Speaker">Guest Speaker</option>
          <option value="Feedback">Feedback</option>
          <option value="Project">Project</option>
        </select>
      </form>
    </section>
  );
}
