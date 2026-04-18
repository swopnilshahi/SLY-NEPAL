from admin_charts.models import DashboardChart

def create_charts():
    DashboardChart.objects.get_or_create(
        title="Appointments Per Day",
        model_name="your_app_name.Appointment",
        date_field="date",
        chart_type="line",
    )

    DashboardChart.objects.get_or_create(
        title="Appointments by Status",
        model_name="your_app_name.Appointment",
        group_by="status",
        chart_type="pie",
    )