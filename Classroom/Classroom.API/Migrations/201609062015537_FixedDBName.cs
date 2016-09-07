namespace Classroom.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixedDBName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "LastName", c => c.String());
            DropColumn("dbo.Students", "Lastnmae");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Students", "Lastnmae", c => c.String());
            DropColumn("dbo.Students", "LastName");
        }
    }
}
