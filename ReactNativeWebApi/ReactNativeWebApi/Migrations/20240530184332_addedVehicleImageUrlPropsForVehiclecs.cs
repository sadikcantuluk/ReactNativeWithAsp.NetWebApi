using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReactNativeWebApi.Migrations
{
    /// <inheritdoc />
    public partial class addedVehicleImageUrlPropsForVehiclecs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Vehiclecs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Vehiclecs");
        }
    }
}
