<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10 ml-auto mr-auto">
        <div class="card card-calendar">
          <div class="card-body">
            <fullCalendar
              ref="calendar"
              defaultView="dayGridMonth"
              :plugins="calendarPlugins"
              :events="events"
              :selectable="true"
              @dateClick="dateClick"
              :header="header"
              :buttonIcons="buttonIcons"
              :selectHelper="true"
              :editable="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swal from 'sweetalert2'
  import FullCalendar from "@fullcalendar/vue";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import timeGridPlugin from "@fullcalendar/timegrid";

  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth();
  const d = today.getDate();
  export default {
    components: {
      FullCalendar
    },
    data() {
      return {
        calendarPlugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        header: {
          center: "dayGridMonth,timeGridWeek,timeGridDay",
          right: "prev,next,today"
        },
        buttonIcons: {
          close: "fa-times",
          prev: "fc-icon-chevron-left",
          next: "fc-icon-chevron-right",
          prevYear: "fc-icon-chevron-left",
          nextYear: "fc-icon-chevron-right"
        },
        events: [
          {
            title: 'All Day Event',
            start: new Date(y, m, 1),
            className: 'event-default'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d - 4, 6, 0),
            allDay: false,
            className: 'event-rose'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d + 3, 6, 0),
            allDay: false,
            className: 'event-rose'
          },
          {
            title: 'Meeting',
            start: new Date(y, m, d - 1, 10, 30),
            allDay: false,
            className: 'event-green'
          },
          {
            title: 'Lunch',
            start: new Date(y, m, d + 7, 12, 0),
            end: new Date(y, m, d + 7, 14, 0),
            allDay: false,
            className: 'event-red'
          },
          {
            title: 'Md-pro Launch',
            start: new Date(y, m, d - 2, 12, 0),
            allDay: true,
            className: 'event-azure'
          },
          {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            className: 'event-azure'
          },
          {
            title: 'Click for Creative Tim',
            start: new Date(y, m, 21),
            end: new Date(y, m, 22),
            url: 'http://www.creative-tim.com/',
            className: 'event-orange'
          },
          {
            title: 'Click for Google',
            start: new Date(y, m, 21),
            end: new Date(y, m, 22),
            url: 'http://www.creative-tim.com/',
            className: 'event-orange'
          }]
      }
    },
    methods: {
      dateClick: function(info) {
        // on select we show the Sweet Alert modal with an input
        Swal.fire({
          title: "Create an Event",
          html: `<div class="md-field md-theme-default">
            <input type="text" id="vp-input" class="vp-input">
            </div>`,
          showCancelButton: true,
          confirmButtonClass: "btn btn-success",
          cancelButtonClass: "btn btn-danger",
          buttonsStyling: false
        }).then(() => {
          var eventTitle = document.getElementById("vp-input").value;
          if (eventTitle) {
            let calendarApi = this.$refs.calendar.getApi();
            calendarApi.addEvent({
              title: eventTitle,
              start: info.dateStr,
              allDay: true
            });
          }
        });
      }
    }
  }
</script>
<style>
  #fullCalendar {
    min-height: 300px;
  }

  .el-loading-spinner .path {
    stroke: #66615B !important;
  }
</style>
