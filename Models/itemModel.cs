namespace RakingApp.Models
{
    public class ItemModel
    {
        public required int Id { get; set; }

        public required string Title { get; set; }

        public required int ImageId { get; set; }

        public required int Ranking { get; set; }

        public required int ItemType { get; set; }
    }
}
