USE [master]
GO
/****** Object:  Database [Tianpeng.CabsBooking]    Script Date: 2021/3/7 1:52:16 ******/
CREATE DATABASE [Tianpeng.CabsBooking]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Tianpeng.CabsBooking', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Tianpeng.CabsBooking.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Tianpeng.CabsBooking_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Tianpeng.CabsBooking_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Tianpeng.CabsBooking].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET ARITHABORT OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET RECOVERY FULL 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET  MULTI_USER 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Tianpeng.CabsBooking', N'ON'
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET QUERY_STORE = OFF
GO
USE [Tianpeng.CabsBooking]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 2021/3/7 1:52:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bookings]    Script Date: 2021/3/7 1:52:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bookings](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](50) NULL,
	[BookingDate] [datetime2](7) NOT NULL,
	[BookingTime] [nvarchar](5) NULL,
	[FromPlace] [int] NOT NULL,
	[ToPlace] [int] NOT NULL,
	[PickupAddress] [nvarchar](200) NULL,
	[LandMark] [nvarchar](30) NULL,
	[PickupDate] [datetime2](7) NOT NULL,
	[PickupTime] [nvarchar](5) NULL,
	[CabTypeId] [int] NOT NULL,
	[ContactNo] [nvarchar](25) NULL,
	[Status] [nvarchar](30) NULL,
 CONSTRAINT [PK_Bookings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bookings_history]    Script Date: 2021/3/7 1:52:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bookings_history](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](50) NULL,
	[BookingDate] [datetime2](7) NOT NULL,
	[BookingTime] [nvarchar](5) NULL,
	[FromPlace] [int] NOT NULL,
	[ToPlace] [int] NOT NULL,
	[PickupAddress] [nvarchar](200) NULL,
	[LandMark] [nvarchar](30) NULL,
	[PickupDate] [datetime2](7) NOT NULL,
	[PickupTime] [nvarchar](5) NULL,
	[CabTypeId] [int] NOT NULL,
	[ContactNo] [nvarchar](25) NULL,
	[Status] [nvarchar](30) NULL,
	[Comp_time] [nvarchar](5) NULL,
	[Charge] [decimal](18, 2) NULL,
	[Feedback] [nvarchar](1000) NULL,
 CONSTRAINT [PK_Bookings_history] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CabTypes]    Script Date: 2021/3/7 1:52:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CabTypes](
	[CabTypeId] [int] IDENTITY(1,1) NOT NULL,
	[CabTypeName] [nvarchar](30) NULL,
 CONSTRAINT [PK_CabTypes] PRIMARY KEY CLUSTERED 
(
	[CabTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Places]    Script Date: 2021/3/7 1:52:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Places](
	[PlaceId] [int] IDENTITY(1,1) NOT NULL,
	[PlaceName] [nvarchar](30) NULL,
 CONSTRAINT [PK_Places] PRIMARY KEY CLUSTERED 
(
	[PlaceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Index [IX_Bookings_CabTypeId]    Script Date: 2021/3/7 1:52:17 ******/
CREATE NONCLUSTERED INDEX [IX_Bookings_CabTypeId] ON [dbo].[Bookings]
(
	[CabTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Bookings_FromPlace]    Script Date: 2021/3/7 1:52:17 ******/
CREATE NONCLUSTERED INDEX [IX_Bookings_FromPlace] ON [dbo].[Bookings]
(
	[FromPlace] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Bookings_ToPlace]    Script Date: 2021/3/7 1:52:17 ******/
CREATE NONCLUSTERED INDEX [IX_Bookings_ToPlace] ON [dbo].[Bookings]
(
	[ToPlace] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Bookings_history_CabTypeId]    Script Date: 2021/3/7 1:52:17 ******/
CREATE NONCLUSTERED INDEX [IX_Bookings_history_CabTypeId] ON [dbo].[Bookings_history]
(
	[CabTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Bookings_history_FromPlace]    Script Date: 2021/3/7 1:52:17 ******/
CREATE NONCLUSTERED INDEX [IX_Bookings_history_FromPlace] ON [dbo].[Bookings_history]
(
	[FromPlace] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Bookings_history_ToPlace]    Script Date: 2021/3/7 1:52:17 ******/
CREATE NONCLUSTERED INDEX [IX_Bookings_history_ToPlace] ON [dbo].[Bookings_history]
(
	[ToPlace] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Bookings]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_CabTypes_CabTypeId] FOREIGN KEY([CabTypeId])
REFERENCES [dbo].[CabTypes] ([CabTypeId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Bookings] CHECK CONSTRAINT [FK_Bookings_CabTypes_CabTypeId]
GO
ALTER TABLE [dbo].[Bookings]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_Places_FromPlace] FOREIGN KEY([FromPlace])
REFERENCES [dbo].[Places] ([PlaceId])
GO
ALTER TABLE [dbo].[Bookings] CHECK CONSTRAINT [FK_Bookings_Places_FromPlace]
GO
ALTER TABLE [dbo].[Bookings]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_Places_ToPlace] FOREIGN KEY([ToPlace])
REFERENCES [dbo].[Places] ([PlaceId])
GO
ALTER TABLE [dbo].[Bookings] CHECK CONSTRAINT [FK_Bookings_Places_ToPlace]
GO
ALTER TABLE [dbo].[Bookings_history]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_history_CabTypes_CabTypeId] FOREIGN KEY([CabTypeId])
REFERENCES [dbo].[CabTypes] ([CabTypeId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Bookings_history] CHECK CONSTRAINT [FK_Bookings_history_CabTypes_CabTypeId]
GO
ALTER TABLE [dbo].[Bookings_history]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_history_Places_FromPlace] FOREIGN KEY([FromPlace])
REFERENCES [dbo].[Places] ([PlaceId])
GO
ALTER TABLE [dbo].[Bookings_history] CHECK CONSTRAINT [FK_Bookings_history_Places_FromPlace]
GO
ALTER TABLE [dbo].[Bookings_history]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_history_Places_ToPlace] FOREIGN KEY([ToPlace])
REFERENCES [dbo].[Places] ([PlaceId])
GO
ALTER TABLE [dbo].[Bookings_history] CHECK CONSTRAINT [FK_Bookings_history_Places_ToPlace]
GO
USE [master]
GO
ALTER DATABASE [Tianpeng.CabsBooking] SET  READ_WRITE 
GO
